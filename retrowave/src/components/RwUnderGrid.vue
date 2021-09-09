<template>
  <div class="undergrid">
    <div class="_1"/>
    <div class="_2"/>
    <div class="_3"/>
    <div class="_4"/>
    <div class="_5"/>
  </div>
</template>

<script>
export default {
  name: 'RwUnderGrid',
};
</script>

<style lang="scss" scoped>
.undergrid {
  position: absolute;
  display: flex;
  z-index: -1;
  top: 0;
  left: 50%;
  max-width: 1200px;
  width: 100%;
  min-height: 100%;
  transform: translateX(calc(-10% - 10rem));

  ._1,
  ._2,
  ._3,
  ._4,
  ._5 {
    position: relative;
    width: calc(100% / 3);
    min-height: 100vh;
    background: transparent;
    border-left: .05rem solid var(--secondary);
    opacity: .1;
  }

  @media (max-width: 560px) {
    ._4,
    ._5 {
      display: none;
    }
  }
}
</style>
