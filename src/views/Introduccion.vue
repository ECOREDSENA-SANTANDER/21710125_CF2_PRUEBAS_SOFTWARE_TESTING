<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 El desarrollo de #[i software] exige procesos de evaluación rigurosos que permitan identificar errores, validar funcionalidades y fortalecer la calidad de los productos tecnológicos. En este contexto, el aseguramiento de la calidad, conocido como #[i Quality Assurance o QA], se convierte en una práctica fundamental para verificar que las soluciones respondan a los requisitos definidos, funcionen de manera confiable y ofrezcan una experiencia adecuada a las personas usuarias. Este componente formativo aborda la implementación de pruebas manuales y unitarias de #[i software], así como la gestión de resultados y la formulación de acciones de mejora a partir de los hallazgos obtenidos.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.br-1
      .bloque-texto-g__img.d-none.d-lg-block(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/intro/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.d-flex.flex-column.justify-content-center.br-2
        p.mb-3 La apropiación de estos saberes permite al aprendiz fortalecer competencias técnicas y analíticas requeridas en la industria tecnológica actual. A través del componente, se desarrollan temas relacionados con las pruebas estáticas, las pruebas de caja negra, las pruebas de caja blanca y las pruebas unitarias, comprendiendo su aplicación en diferentes momentos del proceso de desarrollo. Además, se trabaja la documentación de hallazgos, la trazabilidad de casos de prueba, la medición de cobertura, el reporte de incidentes y la consolidación de evidencias que facilitan la toma de decisiones sobre la calidad del #[i software].
        p.mb-0 El abordaje de los contenidos integra fundamentos técnicos, ejemplos contextualizados y recursos educativos virtuales orientados a facilitar la comprensión progresiva de los temas. De esta manera, el aprendiz podrá reconocer que cada prueba ejecutada, cada defecto reportado y cada plan de mejora formulado contribuyen a entregar soluciones tecnológicas más confiables, seguras y alineadas con las necesidades del usuario final. Este enfoque fortalece la mejora continua del proceso de desarrollo y promueve una cultura de calidad en proyectos de #[i software].
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/5sAgi467WMo?si=RpwCV1RRBavrHGm2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Implementación de pruebas y mejora del software


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
