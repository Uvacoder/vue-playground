<template>
  <RwUnderGrid />

  <RwHeader>
    <template #logo>
      <p class="logo">
        RetroWave
      </p>
    </template>

    <template #links>
      <RwNavbar />
    </template>
  </RwHeader>

  <RwMain>
    <section id="hero">
      <img
        src="./assets/hero1.gif"
        alt="hero image"
        class="hero-cover"
      >
    </section>

    <section id="about">
      <div class="container">
        <span class="element"/>

        <div class="content">
          <RwTitle
            label="About"
          />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, inventore dolorum explicabo nesciunt quod vitae nihil.
            Placeat dicta illum doloremque libero maiores temporibus, quibusdam ex velit.
            Custumancis Ecritelis hedlares workmfrae.
          </p>

          <a
            href="#cta"
            class="button"
          >
            Enroll now!
          </a>
        </div>
      </div>
    </section>

    <section id="cta">
      <div class="container">
        <div class="content">
          <RwTitle
            label="Become Retro now!"
            color="var(--accent)"
            data-text="RetroWave"
          />

          <a
            href="mailto:somewhereover@rainbow.co"
            class="button"
          >
            Just do it!
          </a>
        </div>
      </div>
    </section>
  </RwMain>

  <RwFooter>
    All rights reserved to power rangers &copy;
  </RwFooter>
</template>

<script>
import RwFooter from './components/RwFooter.vue';
import RwHeader from './components/RwHeader.vue';
import RwMain from './components/RwMain.vue';
import RwNavbar from './components/RwNavbar.vue';
import RwUnderGrid from './components/RwUnderGrid.vue';
import RwTitle from './components/RwTitle.vue';

export default {
  name: 'App',
  components: {
    RwFooter,
    RwHeader,
    RwMain,
    RwNavbar,
    RwUnderGrid,
    RwTitle,
  },
};
</script>

<style lang="scss">
// scss vars
$container: 1280px;

// css vars
:root {
  --primary: #d63485;
  --secondary: #f2f3f4;
  --accent: #34d0eb;
  --bg: #212035;
  --text: var(--secondary);
  --font-base: 16px;
  --font-family: Avenir, Helvetica, Arial, sans-serif;
  --time: 200ms;

  @media (max-width: 560px) {
    --font-base: 10px;
  }

  @media (max-width: 1279px) {
    --font-base: 14px;
  }
}

// mixins
@mixin floating {
  @keyframes floating {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(1rem);
    }
  }

  // usage sample
  // animation: floating 1s infinite alternate;
}

@mixin fluid {
  @keyframes fluid {
    0% {
      border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;
    }
    100% {
      border-radius: 40% 60%;
    }
  }

  // usage sample
  // animation: fluid 1s infinite alternate;
}

@mixin aura {
  @keyframes aura {
    0% { filter: drop-shadow(0 .5rem .05rem var(--primary)); }
    4% { filter: drop-shadow(.25rem -.25rem .05rem var(--accent)); }
    8% { filter: drop-shadow(-.25rem -.25rem .125rem var(--primary)); }
    12% { filter: drop-shadow(.25rem .25rem .125rem var(--accent)); }
    100% { filter: drop-shadow(0 0 0 var(--primary)); }
  }

  // usage sample
  // animation: aura 1s infinite alternate;
}

// settings
* {
  box-sizing: border-box;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  font-size: var(--font-base);
  overflow-x: hidden;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-family);
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

.logo {
  @include aura;
  animation: aura 2s infinite alternate;
  transition: cubic-bazier(.11,.95,.8,.09), var(--time);
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: .05em;
  line-height: 100%;
  margin: 0;
  padding: 2rem 0;

  @media (max-width: 560px) {
    font-size: 3.4rem;
    position: relative;
    top: calc(50vh - 47px);
    padding: 0;
  }
}

.button {
  display: inline-block;
  text-decoration: none;
  text-align: center;
  background: var(--primary);
  color: var(--secondary);
  border-radius: 10rem;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: .05em;
  padding: .75rem 2rem;
  border: 0;
  transition: var(--time);
  box-shadow: none;

  &:hover {
    animation: aura 1.25s infinite alternate;
    animation-delay: var(--time);
    transform: scale(1.125);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 560px) {
    font-size: 2rem;
    animation: aura 1.25s infinite alternate;
    padding: 1rem 2.5rem;

    &:hover {
      transform: scale(1);
    }
  }
}

// helpers
.container {
  position: relative;
  max-width: $container;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.25rem;
}

// content
#app {
  position: relative;
  z-index: 10;
}

#hero {
  .hero-cover {
    width: 100vw;
    height: 90vh;
    object-fit: cover;
    object-position: center center;
  }

  @media (max-width: 560px) {
    .hero-cover {
      height: 100vh;
      object-position: center top;
    }
  }
}

#about {
  padding: 10rem 0 6rem;

  .element {
    @include fluid;
    display: flex;
    position: absolute;
    top: -3rem;
    right: 0;
    pointer-events: none;
    z-index: -1;
    width: 10rem;
    height: 10rem;
    transform: scale(5);
    opacity: .15;
    background: var(--primary);
    animation: fluid 5s infinite alternate;

    &:before {
      content: '';
      @extend .element;
      pointer-events: none;
      transform: scale(1.05) translate(-1rem, 2rem);
      opacity: .25;
      animation-delay: 1s;
    }
  }

  .content {
    max-width: 50%;

    p {
      font-size: 1.6rem;
      letter-spacing: .035em;
      line-height: 125%;
      margin-bottom: 2.5rem;
    }
  }

  @media (max-width: 560px) {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;

    .element {
      top: -10rem;
      background: var(--accent);
      transform: scale(3);
      opacity: .05;

      &:before {
        transform: scale(1.05) translate(-1rem, 8rem);
        opacity: .35;
      }
    }

    .content {
      max-width: 100%;
      text-align: center;
    }
  }
}

#cta {
  padding: 20rem 0 12rem;

  .content {
    max-width: 75%;
    margin-left: auto;
    text-align: right;

    .title {
      @include floating;
      position: relative;
      animation: floating 10s infinite alternate;

      &::before {
        content: attr(data-text);
        position: absolute;
        z-index: -1;
        opacity: .025;
        transform: scale(-4, 4) translateY(-2.5rem);
      }
    }
  }

  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 72px);
    padding: 0;

    .content {
      max-width: 100%;
      margin: 0 auto;
      text-align: center;

      .title {
        text-align: center;

        &::before {
          transform: scale(-3, 3) rotate(90deg) translate(2rem, -2.3rem);
        }
      }
    }
  }
}
</style>
