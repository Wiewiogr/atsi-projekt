package pl.tw.atsi.serverapp.city

import org.springframework.stereotype.Component
import javax.sql.DataSource

@Component
class CitiesRepository(val dataSource: DataSource) {
    val selectAllQuery = "SELECT id, name FROM city"

    fun getAll(): List<City> {

        val result = mutableListOf<City>()

        dataSource.connection.use { connection ->
            connection.prepareStatement(selectAllQuery).use { statement ->
                val resultSet = statement.executeQuery()
                while (resultSet.next()) {
                    result.add(City.fromResultSet(resultSet))
                }
            }
        }
        return result
    }
}