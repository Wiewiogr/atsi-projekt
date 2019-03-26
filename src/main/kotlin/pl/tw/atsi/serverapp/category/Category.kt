package pl.tw.atsi.serverapp.category

import java.sql.ResultSet


data class Category(val id: Int, val name: String) {
    companion object {
        fun fromResultSet(resultSet: ResultSet): Category {
            val id = resultSet.getInt(1)
            val name = resultSet.getString(2)
            return Category(id, name)
        }
    }
}