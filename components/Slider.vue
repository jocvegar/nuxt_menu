<template>
    <div class="mb-2">
        <vueper-slides autoplay :breakpoints="breakpoints">
            <vueper-slide
                v-for="(slide) in slides"
                :key="slide.id"
                :title="slide.title"
                :content="slide.content"
                :image="slide.imgUrl"/>
        </vueper-slides>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    components: { VueperSlides, VueperSlide },
    data() {
        return {
            breakpoints: {
                1200: {
                    
                },
                900: {
                    
                },
                600: {
                    fixedHeight: '300px',
                    arrows: false,
                },
                1100: {
                    
                }
            },
            slides: [
                {
                    id: 'slide-1',
                    title: '<b style="font-size: 2rem;color: white">Restaurante Siu</b>',
                    content: '<b style="font-size: 1.5rem;color: white">Servicio A Domicilio<br><span style="font-size: 1.25rem;color: white">2237-9868 || 3170-9868 </span></b>',
                    imgUrl: require('~/assets/images/1.jpg')
                },
                {
                    id: 'slide-2',
                    title: '<b style="font-size: 2rem;color: white">Restaurante Siu</b>',
                    content: '<b style="font-size: 1.5rem;color: white">Servicio A Domicilio<br><span style="font-size: 1.25rem;color: white">2237-9868 || 3170-9868 </span></b>',
                    imgUrl: require('~/assets/images/2.jpg')
                },
            ]
        }
    },
}
</script>
