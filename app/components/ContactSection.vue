<script setup lang="ts">
const { t } = useI18n()

// Форма (реактивные данные)
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  consent: false
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  if (!form.consent) {
    alert(t('contact.consentText')) // Простая валидация
    return
  }

  isSubmitting.value = true

  // Имитация отправки на сервер
  await new Promise(resolve => setTimeout(resolve, 1500))

  // Сброс формы
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
  form.consent = false
  isSubmitting.value = false

  alert('Message Sent! (Demo)')
}
</script>

<template>
  <section id="contact" class="relative w-full bg-gray-50 lg:bg-transparent">

    <div class="grid grid-cols-1 lg:grid-cols-2 min-h-[800px]">

      <div class="relative h-[400px] lg:h-full w-full">
        <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000&h=1200"
            alt="Contact Support"
            class="absolute inset-0 w-full h-full object-cover object-center lg:object-[center_top]"
        />
        <div class="absolute inset-0 bg-black/10 lg:bg-transparent"></div>
      </div>

      <div class="hidden lg:block bg-[#001120] relative">
      </div>
    </div>

    <div class="relative lg:absolute lg:inset-0 pointer-events-none flex items-center justify-center lg:justify-end container mx-auto px-4 md:px-8 py-16 lg:py-0">

      <div class="pointer-events-auto bg-white w-full max-w-xl lg:mr-20 p-8 md:p-12 rounded-[2rem] shadow-2xl relative">

        <div class="absolute top-8 right-8 text-blue-600 animate-spin-slow">
          <Icon name="i-lucide-asterisk" :size="40" />
        </div>

        <div class="mb-10">
          <div class="flex items-center mb-4 text-gray-500 uppercase tracking-widest text-xs font-bold">
            <Icon name="i-lucide-chevrons-right" class="text-blue-600 mr-2" :size="18" />
            <p>{{ $t('contact.label') }}</p>
          </div>
          <h2 class="text-4xl font-bold text-[#001120] mb-1">
            {{ $t('contact.titleMain') }}
          </h2>
          <h3 class="text-3xl font-bold text-gray-400">
            {{ $t('contact.titleSub') }}
          </h3>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-5">

          <input
              v-model="form.name"
              type="text"
              :placeholder="$t('contact.namePlaceholder')"
              class="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:border-blue-600 focus:bg-white transition-all duration-300 placeholder-gray-400"
              required
          />

          <input
              v-model="form.email"
              type="email"
              :placeholder="$t('contact.emailPlaceholder')"
              class="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:border-blue-600 focus:bg-white transition-all duration-300 placeholder-gray-400"
              required
          />

          <input
              v-model="form.subject"
              type="text"
              :placeholder="$t('contact.subjectPlaceholder')"
              class="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:border-blue-600 focus:bg-white transition-all duration-300 placeholder-gray-400"
              required
          />

          <textarea
              v-model="form.message"
              rows="4"
              :placeholder="$t('contact.messagePlaceholder')"
              class="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:border-blue-600 focus:bg-white transition-all duration-300 placeholder-gray-400 resize-none"
              required
          ></textarea>

          <div class="flex items-start gap-3 pt-2">
            <input
                v-model="form.consent"
                type="checkbox"
                id="contact-consent"
                class="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <label for="contact-consent" class="text-sm text-gray-500 cursor-pointer select-none">
              {{ $t('contact.consentText') }}
            </label>
          </div>

          <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-blue-600 text-white font-bold py-5 px-6 rounded-xl flex items-center justify-between hover:bg-blue-700 transition-colors duration-300 group mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <span>
              {{ isSubmitting ? 'Sending...' : $t('contact.submitButton') }}
            </span>
            <Icon
                v-if="!isSubmitting"
                name="i-lucide-arrow-right"
                class="w-5 h-5 group-hover:translate-x-1 transition-transform"
            />
            <Icon
                v-else
                name="i-lucide-loader"
                class="w-5 h-5 animate-spin"
            />
          </button>

        </form>

      </div>
    </div>

  </section>
</template>

<style scoped>
/* Медленное вращение звездочки */
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 10s linear infinite;
}
</style>