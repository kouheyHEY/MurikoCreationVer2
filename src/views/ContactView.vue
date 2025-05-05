<template>
  <div class="contact-view pt-2">
    <h1 class="text-primary pb-3 title">Contact</h1>
    <p class="description">
      以下のフォームに必要事項を入力し、送信ボタンを押してください。
    </p>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="subject">件名</label>
        <input
          id="subject"
          v-model="form.subject"
          type="text"
          class="form-input"
          placeholder="件名を入力してください"
          required
        />
      </div>

      <div class="form-group">
        <label for="message">内容</label>
        <textarea
          id="message"
          v-model="form.message"
          class="form-input"
          placeholder="内容を入力してください"
          rows="5"
          required
        ></textarea>
      </div>

      <button type="submit" class="btn btn-primary" :disabled="!isFormValid">
        送信
      </button>

      <p class="note">※送信ボタンを押すとメールアプリが開きます。</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        subject: '',
        message: '',
      },
      emailContact: import.meta.env.VITE_EMAIL_CONTACT,
      emailContactName: import.meta.env.VITE_EMAIL_CONTACT_NAME,
    };
  },
  computed: {
    isFormValid() {
      return this.form.subject.trim() && this.form.message.trim();
    },
  },
  methods: {
    handleSubmit() {
      const mailtoLink = `mailto:${this.emailContactName}<${this.emailContact}>?subject=${encodeURIComponent(
        this.form.subject
      )}&body=${encodeURIComponent(this.form.message)}`;
      window.location.href = mailtoLink;
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-view {
  min-height: 100vh;
}

.description {
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid $primary;
  background-color: $white;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s;
}

.form-input:focus {
  border-color: $secondary;
  outline: none;
}

.btn {
  margin-top: 1rem;
}

.note {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: gray;
}
</style>
