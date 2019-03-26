package pl.tw.atsi.serverapp

import org.postgresql.ds.PGPoolingDataSource
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import javax.sql.DataSource


@Configuration
class DatabaseConfiguration {

    @Bean
    fun dataSource(@Value("\${datasource.url:localhost}") url: String,
                   @Value("\${datasource.user:postgres}") user: String,
                   @Value("\${datasource.password:postgres}") password: String): DataSource {

        val dataSource = PGPoolingDataSource()

        dataSource.setUrl("jdbc:postgresql://$url:5432/postgres")
        dataSource.user = user
        dataSource.password = password
        dataSource.maxConnections = 10
        dataSource.initialConnections = 1
        dataSource.socketTimeout = 20000
        dataSource.connectTimeout = 20000

        return dataSource
    }
}