<template>
      <header>
        <ul class="header">
            <li>
                <div class="header-logo">
                    <h1>TA Airlines</h1>
                    <img src="../assets/planesvg.svg" alt="svg-image">
                </div>
            </li>
            <li><a href="#">Plan Travel</a></li>
            <li><a href="#">Travel Information</a></li>
            <li><a href="#">Log in</a></li>
        </ul>
      </header>
</template>

<script>
export default {};
</script>

<style>
h1 {
  margin: 20px 25px 20px 0;
  font-weight: bold;
  font-size: 2.5rem;
}
a {
  font-size: 1rem;
  color: white;
  text-decoration: none;
}
.header {
  color: white;
  margin: 0;
  padding: 0;
  background: linear-gradient(to right, #584bdc, #aa55ff);
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: space-around;
}

.header-logo {
  display: flex;
  align-items: center;
  flex-grow: 1;
  /* justify-content: flex-start; */
}
</style>
