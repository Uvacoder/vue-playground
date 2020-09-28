<template>
  <header>
    <nav>
      <a href="/" class="logo">{{ logo }}</a>

      <ul>
        <li><a href="/">This</a></li>
        <li><a href="/">Is a</a></li>
        <li><a href="/">Header</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    logo: null,
  },
};
</script>

<style coped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  width: 100%;
}
nav {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1140px;
  min-height: 80px;
  padding: 0 15px;
  margin: 0 auto;
}
.logo {
  color: #42b983;
  font-size: 30px;
  font-weight: 700;
  text-decoration: none !important;
}
ul {
  display: flex;
  list-style: none;
}

li {
  padding: 0;
  margin: 0;
}

li a {
  color: #42b983;
  text-decoration: none !important;
  font-size: 18px;
  transition: 150ms;
  padding: 8px 20px;
}

li a:hover {
  filter: brightness(75%);
}
</style>