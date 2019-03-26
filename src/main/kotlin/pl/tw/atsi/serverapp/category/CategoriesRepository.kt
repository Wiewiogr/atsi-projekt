package pl.tw.atsi.serverapp.category

import org.springframework.stereotype.Component
import javax.sql.DataSource

@Component
class CategoriesRepository(val dataSource: DataSource) {
    val selectAllQuery = "SELECT id, name FROM category"

    fun getAll(): List<Category> {

        val result = mutableListOf<Category>()

        dataSource.connection.use { connection ->
            connection.prepareStatement(selectAllQuery).use { statement ->
                val resultSet = statement.executeQuery()
                while (resultSet.next()) {
                    result.add(Category.fromResultSet(resultSet))
                }
            }
        }
        return result
    }
}