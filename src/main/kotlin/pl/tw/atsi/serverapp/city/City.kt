package pl.tw.atsi.serverapp.city

import java.sql.ResultSet


data class City(val id: Int, val name: String) {
    companion object {
        fun fromResultSet(resultSet: ResultSet): City {
            val id = resultSet.getInt(1)
            val name = resultSet.getString(2)
            return City(id, name)
        }
    }
}