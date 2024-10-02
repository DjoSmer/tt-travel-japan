<template>
  <div class="greetings">
    <h1 class="green">Travel to Japan</h1>
    <h3>
      Japan is a beautiful country. You can see many places like Osaka, Hiroshima, Fushimi Inari Taisha...
      <br />
      Only now, when you buy one ticket, the 2nd ticket is free.
    </h3>

    <div>
      <div class="price-original">
        <span class="title">original now</span>
        <span class="currency">€</span>
        <span class="price">1400</span>
      </div>
      <div class="price-now">
        <span class="title">price now</span>
        <span class="currency">€</span>
        <span class="price">799.50</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.price-now,
.price-original {
  padding: .5rem;
  display: inline-block;
}

.price-now {
  color: rgb(209 36 41);
  padding: .5rem;
  display: inline-block;
}

.price-now .title,
.price-original .title {
  font-size: 1rem;
  font-style: italic;
  font-weight: bold;
  display: block;
}

.price-now .currency,
.price-original .currency {
  font-size: 2rem;
}

.price-now .price {
  line-height: 4rem;
  font-size: 5rem;
  font-weight: 800;
}

.price-original .price {
  line-height: 2rem;
  font-size: 3rem;
  font-weight: 800;
  text-decoration: line-through rgb(209 36 41);
}


@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
