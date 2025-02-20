<script>
import FrontPageSection from '../components/homepageComponents/FrontPageSection.vue';
import ProjectSeriesMenuSection from '../components/homepageComponents/ProjectSeriesMenuSection.vue';
import AboutSection from '../components/homepageComponents/AboutSection.vue';
import ContactSection from '../components/homepageComponents/ContactSection.vue';

export default {
  data() {
    return {
    }
  },
  components: {
    FrontPageSection,
    ProjectSeriesMenuSection,
    AboutSection,
    ContactSection
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  },
}
</script>

<template>
    <FrontPageSection />
    <AboutSection />
    <ProjectSeriesMenuSection />
    <ContactSection />
</template>

<style lang="scss" scoped>

</style>