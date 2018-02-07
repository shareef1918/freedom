<template>
  <component :is="currentView"></component>
</template>

<script>
import AdminView from '@/components/Admin/Dashboard'
import UserView from '@/components/User/Dashboard'
export default {
  data: () => ({

  }),
  name: 'App',
  computed: {
    currentView () {
      return this.$route.path === '/admin' ? AdminView : UserView
    }
  }
}
</script>
