package pl.tw.atsi.serverapp

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.scheduling.annotation.EnableScheduling

@SpringBootApplication
@EnableScheduling
class ServerAppApplication

fun main(args: Array<String>) {
	runApplication<ServerAppApplication>(*args)
}
