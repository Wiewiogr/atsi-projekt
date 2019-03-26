package pl.tw.atsi.serverapp.offer

import org.slf4j.LoggerFactory
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*


@RestController
class OffersController(val offersRepository: OffersRepository) {

    @CrossOrigin(origins = ["*"])
    @GetMapping("/listing")
    fun listOffers(
            @RequestParam("q", required = false) query: Optional<String>,
            @RequestParam("city", required = false) city: Optional<Int>,
            @RequestParam("category", required = false) category: Optional<Int>
    ): ResponseEntity<List<Offer>> {
        LOGGER.info("Received listing request with params: query=$query city=$city category=$category.")

        return ResponseEntity.ok(offersRepository.getAll(query, city, category))
    }

    @CrossOrigin(origins = ["*"])
    @PostMapping("/offer")
    fun addOffer(@RequestBody request: CreateOfferRequest): ResponseEntity<Long> {
        LOGGER.info("Received add offer request : $request")

        if (request.name.isBlank() || request.content.isBlank() || request.contactEmail.isBlank()) {
            return ResponseEntity.badRequest().build()
        }

        return ResponseEntity.ok(offersRepository.add(request))
    }

    private val LOGGER = LoggerFactory.getLogger(OffersController::class.java)
}
