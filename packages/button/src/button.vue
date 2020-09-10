<template>
  <div>
    <button @click="handleClick" v-bind="$attrs">{{label}}</button>
  </div>
</template>

<script>
export default {
  name: 'LgButton',
  props: ['label'],
  methods: {
    handleClick (evt) {
      this.$emit('onClick', evt)
      evt.preventDefault();
    }
  }
}
</script>

<style>

</style>
