<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>

    <label for="name">Name:</label>
    <input id="name" v-model="name" />

    <label for="review">Review:</label>
    <textarea id="review" v-model="review" />

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>

    <label for="recommend">Would you recommend this product:</label>
    <select id="recommend" v-model="recommend">
      <option>yes</option>
      <option>no</option>
    </select>

    <input class="button" type="submit" value="Submit" />
  </form>
</template>

<script>
export default {
  name: "ReviewForm",
  methods: {
    onSubmit() {
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend,
      };

      if (
        this.name === "" ||
        this.review === "" ||
        this.rating === null ||
        this.recommend === null
      ) {
        alert("please fill out all the fields before submit!");
        return;
      }

      this.$emit("review-submitted", productReview);

      this.name;
      this.review;
      this.rating;
      this.recommend;
    },
  },
  data() {
    return {
      name: "",
      review: "",
      rating: null,
      recommend: "",
    };
  },
};
</script>