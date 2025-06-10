// JavaScript for Legal Community Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Cookie Banner
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookies = document.getElementById('acceptCookies');
    const essentialCookies = document.getElementById('essentialCookies');
    
    if (cookieBanner && acceptCookies && essentialCookies) {
        // Check if user has already accepted cookies
        if (!localStorage.getItem('cookiesAccepted')) {
            cookieBanner.style.display = 'block';
        }
        
        acceptCookies.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieBanner.style.display = 'none';
        });
        
        essentialCookies.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'essential');
            cookieBanner.style.display = 'none';
        });
    }
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', function() {
                item.classList.toggle('active');
                
                // Close other open FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
            });
        });
    }
    
    // Chatbot Functionality
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    
    if (chatbotToggle && chatbotContainer && chatbotClose && chatbotMessages && chatbotInput && chatbotSend) {
        chatbotToggle.addEventListener('click', function() {
            chatbotContainer.style.display = 'block';
        });
        
        chatbotClose.addEventListener('click', function() {
            chatbotContainer.style.display = 'none';
        });
        
        function sendMessage() {
            const message = chatbotInput.value.trim();
            
            if (message !== '') {
                // Add user message
                const userMessageElement = document.createElement('div');
                userMessageElement.classList.add('message', 'user');
                userMessageElement.textContent = message;
                chatbotMessages.appendChild(userMessageElement);
                
                // Clear input
                chatbotInput.value = '';
                
                // Scroll to bottom
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
                
                // Process message and get bot response
                setTimeout(function() {
                    const botResponse = getBotResponse(message);
                    const botMessageElement = document.createElement('div');
                    botMessageElement.classList.add('message', 'bot');
                    botMessageElement.textContent = botResponse;
                    chatbotMessages.appendChild(botMessageElement);
                    
                    // Scroll to bottom
                    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
                }, 500);
            }
        }
        
        chatbotSend.addEventListener('click', sendMessage);
        
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Bot responses based on keywords
    function getBotResponse(message) {
        message = message.toLowerCase();
        
        if (message.includes('привет') || message.includes('здравствуйте') || message.includes('добрый день')) {
            return 'Здравствуйте! Чем я могу вам помочь?';
        } else if (message.includes('услуги') || message.includes('сервисы')) {
            return 'Legal Community специализируется на корпоративном и международном праве. Подробнее о наших услугах вы можете узнать в разделе "Услуги" или я могу рассказать о конкретной услуге.';
        } else if (message.includes('корпоративное право') || message.includes('корпоративный')) {
            return 'Наши услуги в области корпоративного права включают: сопровождение сделок M&A, корпоративную реструктуризацию, корпоративное управление, юридический аудит и защиту интересов акционеров.';
        } else if (message.includes('международное право') || message.includes('международный')) {
            return 'В сфере международного права мы предлагаем: сопровождение международных сделок, международный арбитраж, трансграничные споры, международное налоговое планирование и защиту интеллектуальной собственности.';
        } else if (message.includes('контакты') || message.includes('связаться') || message.includes('телефон')) {
            return 'Вы можете связаться с нами по телефону +7 (XXX) XXX-XX-XX или по email: info@legalcommunity.com. Также вы можете заполнить форму обратной связи на нашем сайте в разделе "Контакты".';
        } else if (message.includes('цена') || message.includes('стоимость') || message.includes('сколько стоит')) {
            return 'Стоимость наших услуг зависит от сложности и объема работы. Мы предлагаем индивидуальный подход к каждому клиенту. Для получения предварительной оценки стоимости, пожалуйста, свяжитесь с нами по телефону или оставьте заявку на сайте.';
        } else if (message.includes('консультация') || message.includes('консультацию')) {
            return 'Для получения консультации вы можете оставить заявку на нашем сайте, позвонить по телефону +7 (XXX) XXX-XX-XX или написать на email: info@legalcommunity.com.';
        } else if (message.includes('адрес') || message.includes('офис') || message.includes('где находитесь')) {
            return 'Наш офис находится по адресу: Москва, ул. Примерная, д. 123, офис 456. Мы работаем с понедельника по пятницу с 9:00 до 18:00.';
        } else if (message.includes('спасибо') || message.includes('благодарю')) {
            return 'Всегда рады помочь! Если у вас возникнут еще вопросы, обращайтесь.';
        } else {
            return 'Извините, я не совсем понял ваш вопрос. Могу я помочь вам с информацией о наших услугах, контактах или записью на консультацию?';
        }
    }
    
    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate fields
            let isValid = true;
            
            if (name === '') {
                isValid = false;
                showError('name', 'Пожалуйста, введите ваше имя');
            } else {
                clearError('name');
            }
            
            if (email === '') {
                isValid = false;
                showError('email', 'Пожалуйста, введите ваш email');
            } else if (!isValidEmail(email)) {
                isValid = false;
                showError('email', 'Пожалуйста, введите корректный email');
            } else {
                clearError('email');
            }
            
            if (subject === '') {
                isValid = false;
                showError('subject', 'Пожалуйста, введите тему сообщения');
            } else {
                clearError('subject');
            }
            
            if (message === '') {
                isValid = false;
                showError('message', 'Пожалуйста, введите сообщение');
            } else {
                clearError('message');
            }
            
            // If form is valid, submit it
            if (isValid) {
                // Here would be the code to send the form data to the server
                // For now, we'll just show a success message
                
                // Clear form
                contactForm.reset();
                
                // Show success message
                const formSubmit = contactForm.querySelector('.form-submit');
                const successMessage = document.createElement('div');
                successMessage.classList.add('success-message');
                successMessage.textContent = 'Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.';
                formSubmit.appendChild(successMessage);
                
                // Remove success message after 5 seconds
                setTimeout(function() {
                    successMessage.remove();
                }, 5000);
            }
        });
    }
    
    // Helper functions for form validation
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = message;
        
        // Remove any existing error message
        clearError(fieldId);
        
        // Add error class to field
        field.classList.add('error');
        
        // Add error message after field
        field.parentNode.appendChild(errorMessage);
    }
    
    function clearError(fieldId) {
        const field = document.getElementById(fieldId);
        const errorMessage = field.parentNode.querySelector('.error-message');
        
        if (errorMessage) {
            errorMessage.remove();
        }
        
        field.classList.remove('error');
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
