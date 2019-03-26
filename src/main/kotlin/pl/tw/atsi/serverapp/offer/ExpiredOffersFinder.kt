package pl.tw.atsi.serverapp.offer

import org.slf4j.LoggerFactory
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Component


@Component
class ExpiredOffersFinder(val offersRepository: OffersRepository) {

    @Scheduled(fixedRate = 1000 * 30)
    fun find() {
        val expiredOffers = offersRepository.getExpired(System.currentTimeMillis())

        LOGGER.info("Expired offers : $expiredOffers")

        expiredOffers.forEach(offersRepository::removeOffer)
    }

    private val LOGGER = LoggerFactory.getLogger(ExpiredOffersFinder::class.java)
}