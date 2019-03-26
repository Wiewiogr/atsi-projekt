package pl.tw.atsi.serverapp.offer

import java.math.BigDecimal
import java.sql.ResultSet


data class CreateOfferRequest(val categoryId: Int,
                              val cityId: Int,
                              val price: BigDecimal,
                              val name: String,
                              val content: String,
                              val contactEmail: String,
                              val expirationPeriod: Int)

data class Offer(val id: Int,
                 val categoryId: Int,
                 val cityId: Int,
                 val price: BigDecimal,
                 val name: String,
                 val content: String,
                 val contactEmail: String,
                 val creationTime: Long,
                 val expirationTime: Long) {

    companion object {
        fun fromCreateOfferRequest(request: CreateOfferRequest, id: Int, creationTime: Long, expirationTime: Long): Offer {
            return Offer(
                    id,
                    request.categoryId,
                    request.cityId,
                    request.price,
                    request.name,
                    request.content,
                    request.contactEmail,
                    creationTime,
                    expirationTime
            )
        }

        fun fromResultSet(resultSet: ResultSet): Offer {
            val id = resultSet.getInt(1)
            val cityId = resultSet.getInt(2)
            val categoryId = resultSet.getInt(3)
            val price = BigDecimal(resultSet.getString(4))
            val name = resultSet.getString(5)
            val content = resultSet.getString(6)
            val contactEmail = resultSet.getString(7)
            val creationTime = resultSet.getLong(8)
            val expirationTime = resultSet.getLong(9)
            return Offer(id, categoryId, cityId, price, name, content, contactEmail, creationTime, expirationTime)
        }
    }
}