package pl.tw.atsi.serverapp.city

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController


@RestController
class CitiesController(val citiesRepository: CitiesRepository) {

    @CrossOrigin(origins = ["*"])
    @GetMapping("/city")
    fun getCities(): List<City> = citiesRepository.getAll()
}


