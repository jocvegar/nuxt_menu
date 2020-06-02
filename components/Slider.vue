<template>
    <div class="my-4">
        <vueper-slides class="no-shadow" bullets-outside transition-speed="250" autoplay>
            <vueper-slide
            v-for="(slide, i) in slides"
            :key="slide.id"
            :title="slide.title"
            :content="slide.content"
            :style="'background-color: ' + ['#ff6ec7', '#42b983', '#ff5252'][i % 3]" />
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
            pauseOnHover: true,
            autoPlaying: true,
            internalAutoPlaying: true,
            slides: [
                {
                    id: 'slide-1',
                    title: 'Slide <b style="font-size: 1.3em;color: yellow">#1</b>',
                    content: 'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>'
                },
                {
                    id: 'slide-2',
                    title: 'Slide <b style="font-size: 1.3em;color: blue">#2</b>',
                    content: 'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>'
                },
                {
                    id: 'slide-3',
                    title: 'Slide <b style="font-size: 1.3em;color: green">#3</b>',
                    content: 'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>'
                },
            ]
        }
    },
}
</script>

<style>


</style>
