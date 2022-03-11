<template>
  <form @click.prevent="onClick">
        <div>
            <label for="name">姓名</label>
            <input type="text" id="name" name="name">
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email">
        </div>
        <div>
            <label for="tel">電話</label>
            <input type="tel" id="tel" name="tel">
        </div>
        <div>
            <label for="address">地址</label>
            <input type="text" id="address" name="address">
        </div>
        <div>
            <label for="message">訊息</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <div>
            <button type="submit">送出</button>
        </div>
    </form>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'CartForm'
}
</script>
