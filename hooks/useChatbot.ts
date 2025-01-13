import { useEffect } from 'react'

export function useChatbot() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://cdn.jsdelivr.net/gh/meetneuraai/ChatEmbed/dist/web.js'
    script.onload = () => {
      // @ts-ignore
      window.Chatbot.init({
        chatflowid: '5c0eca82-236c-4eba-9e40-c6019eb96255',
        apiHost: 'https://bots.meetneura.ai',
        chatflowConfig: {},
        theme: {
          button: {
            backgroundColor: '#dc2525',
            right: 20,
            bottom: 20,
            size: 48,
            dragAndDrop: true,
            iconColor: 'white',
            customIconSrc: 'https://neuraai.blob.core.windows.net/uploads/mingcute_chat-2-line.png',
            autoWindowOpen: {
              autoOpen: false,
              openDelay: 5,
              autoOpenOnMobile: false,
            },
          },
          tooltip: {
            showTooltip: true,
            tooltipMessage: 'Oui! 👋',
            tooltipBackgroundColor: '#000000',
            tooltipTextColor: 'white',
            tooltipFontSize: 16,
          },
          disclaimer: {
            title: 'Disclaimer',
            message: 'En interagissant avec ce chatbot, vous acceptez nos <a target="_blank" href="https://cannesserrurier.fr/privacy-policy">Politique de confidentialité</a>',
          },
          chatWindow: {
            showTitle: true,
            title: 'SERRURIER CANNES AI',
            titleAvatarSrc: '/neura-avatar2025-black.png',
            titleColor: '#ffffff',
            welcomeMessage: 'Bonjour. Je suis Serrurier Cannes AI.\n\n**Comment puis-je vous aider aujourd\'hui ?**',
            backgroundColor: '#ffffff',
            fontSize: 16,
            poweredByTextColor: '#000000',
            botMessage: {
              backgroundColor: '#f7f8ff',
              textColor: '#303235',
              showAvatar: true,
              avatarSrc: '/neura-avatar2025-black.png',
            },
            userMessage: {
              backgroundColor: '#dc2525',
              textColor: '#ffffff',
              size: 'small',
              showAvatar: true,
              avatarSrc: 'https://neuraai.blob.core.windows.net/uploads/user-avatar.png',
            },
            textInput: {
              placeholder: 'Écrivez ici',
              backgroundColor: '#ffffff',
              textColor: '#303235',
              sendButtonColor: '#dc2525',
              maxChars: 800,
              maxCharsWarningMessage: 'Le nombre de caractères autorisés a été dépassé. Veuillez entrer moins de 800 caractères',
              autoFocus: false,
              sendMessageSound: true,
              receiveMessageSound: true,
            },
            feedback: {
              color: '#dc2525',
            },
            dateTimeToggle: {
              date: true,
              time: true,
            },
            footer: {
              textColor: '#303235',
              text: 'Powered by',
              company: 'Neura IA',
              companyLink: 'https://meetneura.ai',
            },
          }
        }
      })
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
}

