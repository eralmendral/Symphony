<template>
  <div class="container">
    <div class="header">
      <h1>{{ title }}</h1>
      <p class="message">{{ message }}</p>
    </div>

    <div class="card">
      <h2>Welcome to Symphony Desktop!</h2>
      <p>This is a simple desktop app boilerplate built with Tauri and Vue.js.</p>
      
      <div class="features">
        <div class="feature">
          <h3>🚀 Tauri</h3>
          <p>Cross-platform desktop apps with web technologies</p>
        </div>
        <div class="feature">
          <h3>⚡ Vue.js</h3>
          <p>Progressive JavaScript framework</p>
        </div>
        <div class="feature">
          <h3>🎨 Modern UI</h3>
          <p>Beautiful and responsive design</p>
        </div>
      </div>

      <div class="actions">
        <button @click="greet" class="btn primary">
          {{ greetMsg }}
        </button>
        <button @click="toggleTheme" class="btn secondary">
          Toggle Theme
        </button>
      </div>
    </div>

    <div class="footer">
      <p>Built with ❤️ using Tauri + Vue.js</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { invoke } from '@tauri-apps/api/tauri'

export default {
  name: 'App',
  setup() {
    const title = ref('Symphony Desktop App')
    const message = ref('Hello World from Tauri!')
    const greetMsg = ref('Greet')
    const isDark = ref(false)

    const greet = async () => {
      greetMsg.value = await invoke('greet', { name: 'Symphony' })
    }

    const toggleTheme = () => {
      isDark.value = !isDark.value
      document.body.classList.toggle('dark', isDark.value)
    }

    onMounted(() => {
      // Initialize theme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = prefersDark
      document.body.classList.toggle('dark', prefersDark)
    })

    return {
      title,
      message,
      greetMsg,
      greet,
      toggleTheme
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  transition: all 0.3s ease;
}

body.dark {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.message {
  font-size: 1.5rem;
  color: rgba(255,255,255,0.9);
  margin-bottom: 2rem;
}

.card {
  background: rgba(255,255,255,0.95);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
  width: 100%;
  max-width: 600px;
}

body.dark .card {
  background: rgba(44, 62, 80, 0.95);
  color: white;
}

.card h2 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

body.dark .card h2 {
  color: white;
}

.card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
}

body.dark .card p {
  color: #ccc;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.feature {
  text-align: center;
  padding: 1rem;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(102, 126, 234, 0.2);
}

body.dark .feature {
  background: rgba(52, 73, 94, 0.3);
  border-color: rgba(52, 73, 94, 0.5);
}

.feature h3 {
  color: #667eea;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

body.dark .feature h3 {
  color: #74b9ff;
}

.feature p {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

body.dark .feature p {
  color: #ccc;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn.secondary {
  background: rgba(255,255,255,0.2);
  color: white;
  border: 1px solid rgba(255,255,255,0.3);
}

.btn.secondary:hover {
  background: rgba(255,255,255,0.3);
  transform: translateY(-2px);
}

.footer {
  margin-top: 2rem;
  text-align: center;
  color: rgba(255,255,255,0.8);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .message {
    font-size: 1.2rem;
  }
  
  .features {
    grid-template-columns: 1fr;
  }
  
  .actions {
    flex-direction: column;
  }
}
</style> 