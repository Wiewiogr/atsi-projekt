package pl.tw.atsi.serverapp.category

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class CategoriesController(val categoriesRepository: CategoriesRepository) {

    @CrossOrigin(origins = ["*"])
    @GetMapping("/category")
    fun getCategories(): List<Category> = categoriesRepository.getAll()

}

