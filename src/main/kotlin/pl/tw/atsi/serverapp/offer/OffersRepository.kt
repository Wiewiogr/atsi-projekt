package pl.tw.atsi.serverapp.offer

import org.springframework.stereotype.Component
import java.util.*
import javax.sql.DataSource


@Component
class OffersRepository(val dataSource: DataSource) {

    val day = 1L * 24 * 60 * 60 * 1000

    fun getAll(query: Optional<String>, city: Optional<Int>, category: Optional<Int>): List<Offer> {
        var getOffersQuery = "SELECT * FROM offer"

        val additionalFilters = mutableListOf<String>()

        if (query.isPresent) {
            additionalFilters.add("lower(name) like lower('%${query.get()}%')")
        }

        if (city.isPresent) {
            additionalFilters.add("cityid = ${city.get()}")
        }

        if (category.isPresent) {
            additionalFilters.add("categoryid = ${category.get()}")
        }

        if (additionalFilters.isNotEmpty()) {
            getOffersQuery += " WHERE "
            getOffersQuery += additionalFilters.joinToString(" AND ")
        }

        val result = mutableListOf<Offer>()

        dataSource.connection.use { connection ->
            connection.prepareStatement(getOffersQuery).use { statement ->
                val resultSet = statement.executeQuery()
                while (resultSet.next()) {
                    result.add(Offer.fromResultSet(resultSet))
                }
            }
        }
        return result
    }

    val addOfferQuery = "" +
            "INSERT INTO offer(\n" +
            "  cityId,\n" +
            "  categoryId,\n" +
            "  price,\n" +
            "  name,\n" +
            "  content,\n" +
            "  contactEmail,\n" +
            "  creationTime,\n" +
            "  expirationTime)\n" +
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?);\n"

    fun add(request: CreateOfferRequest): Long {
        val creationTime = System.currentTimeMillis()
        val expirationDate = creationTime + request.expirationPeriod * day

        dataSource.connection.use { connection ->
            connection.prepareStatement(addOfferQuery).use { statement ->
                statement.setInt(1, request.cityId)
                statement.setInt(2, request.categoryId)
                statement.setBigDecimal(3, request.price)
                statement.setString(4, request.name)
                statement.setString(5, request.content)
                statement.setString(6, request.contactEmail)
                statement.setLong(7, creationTime)
                statement.setLong(8, expirationDate)
                statement.execute()
            }
        }

        return expirationDate
    }

    val getExpiredOffersQuery = "" +
            "SELECT id FROM offer\n" +
            "WHERE expirationtime < ?;"

    fun getExpired(timestamp: Long): List<Int> {

        val result = mutableListOf<Int>()

        dataSource.connection.use { connection ->
            connection.prepareStatement(getExpiredOffersQuery).use { statement ->
                statement.setLong(1, timestamp)
                val resultSet = statement.executeQuery()
                while (resultSet.next()) {
                    result.add(resultSet.getInt(1))
                }
            }
        }
        return result
    }

    fun removeOffer(id: Int) {
        dataSource.connection.use { connection ->
            val removeOfferQuery = "DELETE FROM offer WHERE id = ?;"
            connection.prepareStatement(removeOfferQuery).use { statement ->
                statement.setInt(1, id)
                statement.execute()
            }
        }
    }
}