<template>
  <nav>
    <ul>
      <li
        v-for="(link, index) in links"
        :key="index + `_${Math.random()}_`"
      >
        <a :href="link.url">
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'RwNavbar',
  setup() {
    const links = [
      {
        url: '#hero',
        label: 'Home',
      },
      {
        url: '#about',
        label: 'About',
      },
      {
        url: '#cta',
        label: 'Get in touch',
      },
    ];

    return {
      links,
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      +li {
        margin-left: 1rem;
      }

      a {
        text-decoration: none;
        color: var(--primary);
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: .02em;
        transition: var(--time);

        &:hover {
          filter: drop-shadow(0 .5rem .5rem var(--primary))
        }
      }
    }
  }

  @media (max-width: 560px) {
    display: none;
  }
}
</style>
