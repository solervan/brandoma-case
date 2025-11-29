import './MatchChat.scss';
import { useState, useRef, useEffect } from 'react';
import { 
  Button, 
  Input, 
  Dropdown, 
  IconButton, 
  Avatar,
  Loader
} from 'rsuite';
import { 
  Attachment, 
  Send, 
  More, 

  Search,
  Phone,
} from '@rsuite/icons';

interface Message {
  id: number;
  text: string;
  timestamp: string;
  isUser: boolean;
  status: 'sent' | 'delivered' | 'read';
  attachments?: string[];
}

interface ChatContact {
  id: number;
  name: string;
  avatar: string;
  status: 'online' | 'offline' | 'away';
  lastSeen?: string;
}

export default function MatchChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Здравствуйте! Чем могу помочь?',
      timestamp: '15:53',
      isUser: false,
      status: 'read'
    },
    {
      id: 2,
      text: 'У меня вопрос по поводу заказа №12345',
      timestamp: '15:54',
      isUser: true,
      status: 'read'
    },
    {
      id: 3,
      text: 'Конечно! Вижу ваш заказ. Что именно вас интересует?',
      timestamp: '15:55',
      isUser: false,
      status: 'read'
    },
    {
      id: 4,
      text: 'Хотел бы узнать статус доставки',
      timestamp: '15:56',
      isUser: true,
      status: 'read'
    },
    {
      id: 5,
      text: 'Ваш заказ уже в пути, ожидайте доставку в течение 2 часов',
      timestamp: '18:00',
      isUser: false,
      status: 'delivered'
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const contacts: ChatContact[] = [
    { id: 1, name: 'Ассистент', avatar: '/api/placeholder/40/40', status: 'online' },
    { id: 2, name: 'Техподдержка', avatar: '/api/placeholder/40/40', status: 'online' },
    { id: 3, name: 'Менеджер по продажам', avatar: '/api/placeholder/40/40', status: 'away' },
    { id: 4, name: 'Служба доставки', avatar: '/api/placeholder/40/40', status: 'offline' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      timestamp: new Date().toLocaleTimeString('ru-RU', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
      isUser: true,
      status: 'sent'
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsLoading(true);

    // Имитация ответа от ассистента
    setTimeout(() => {
      const assistantMessage: Message = {
        id: messages.length + 2,
        text: 'Спасибо за ваш вопрос! Я уже ищу информацию для вас...',
        timestamp: new Date().toLocaleTimeString('ru-RU', { 
          hour: '2-digit', 
          minute: '2-digit' 
        }),
        isUser: false,
        status: 'delivered'
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const exportChat = () => {
    const chatText = messages.map(msg => 
      `${msg.timestamp} ${msg.isUser ? 'Вы' : 'Ассистент'}: ${msg.text}`
    ).join('\n');
    
    const blob = new Blob([chatText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const reportChat = () => {
    // Логика отправки жалобы
    alert('Жалоба отправлена. Мы рассмотрим её в ближайшее время.');
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="chat">
      <div className="chat__container">
        {/* Боковая панель с контактами */}
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <h2 className="chat__title">Чаты</h2>
            <div className="chat__search">
              <Search className="chat__search-icon" />
              <Input
                placeholder="Поиск чатов..."
                value={searchQuery}
                onChange={setSearchQuery}
                className="chat__search-input"
              />
            </div>
          </div>

          <div className="chat__contacts">
            {filteredContacts.map(contact => (
              <div key={contact.id} className="chat__contact">
                <div className="chat__contact-avatar">
                  <Avatar src={contact.avatar} circle />
                  <div className={`chat__status chat__status--${contact.status}`} />
                </div>
                <div className="chat__contact-info">
                  <div className="chat__contact-name">{contact.name}</div>
                  <div className="chat__contact-status">
                    {contact.status === 'online' && 'В сети'}
                    {contact.status === 'away' && 'Недоступен'}
                    {contact.status === 'offline' && 'Не в сети'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Основная область чата */}
        <div className="chat__main">
          {/* Заголовок чата */}
          <div className="chat__header">
            <div className="chat__header-info">
              <Avatar src="/api/placeholder/40/40" circle />
              <div className="chat__header-text">
                <div className="chat__contact-name">Ассистент</div>
                <div className="chat__contact-status">В сети</div>
              </div>
            </div>

            <div className="chat__header-actions">
              <IconButton icon={<Phone />} appearance="subtle" />
              
              <Dropdown
                renderToggle={(props, ref) => (
                  <IconButton {...props} ref={ref} icon={<More />} appearance="subtle" />
                )}
                placement="bottomEnd"
              >
                {/* <Dropdown.Item icon={<Download />} onClick={exportChat}> */}
                  Выгрузить диалог
                {/* </Dropdown.Item> */}
                {/* <Dropdown.Item icon={<Flag />} onClick={reportChat}> */}
                  Пожаловаться
                {/* </Dropdown.Item> */}
                <Dropdown.Item>Добавить в избранное</Dropdown.Item>
                <Dropdown.Item>Очистить историю</Dropdown.Item>
                <Dropdown.Item>Заблокировать</Dropdown.Item>
              </Dropdown>
            </div>
          </div>

          {/* Область сообщений */}
          <div className="chat__messages">
            {messages.map(message => (
              <div
                key={message.id}
                className={`chat__message ${
                  message.isUser ? 'chat__message--user' : 'chat__message--assistant'
                }`}
              >
                <div className="chat__message-content">
                  <div className="chat__message-text">{message.text}</div>
                  <div className="chat__message-meta">
                    <span className="chat__message-time">{message.timestamp}</span>
                    {message.isUser && (
                      <span className={`chat__message-status chat__message-status--${message.status}`}>
                        {message.status === 'sent' && '✓'}
                        {message.status === 'delivered' && '✓✓'}
                        {message.status === 'read' && '✓✓'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="chat__message chat__message--assistant">
                <div className="chat__message-content">
                  <div className="chat__typing-indicator">
                    <Loader size="sm" />
                    <span>Ассистент печатает...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Панель ввода сообщения */}
          <div className="chat__input-area">
            <div className="chat__input-actions">
              {/* <IconButton icon={<Smile />} appearance="subtle" />
              <IconButton icon={<Paperclip />} appearance="subtle" /> */}
              <IconButton icon={<Attachment />} appearance="subtle" />
            </div>
            
            <Input
              as="textarea"
              rows={1}
              placeholder="Введите сообщение..."
              value={newMessage}
              onChange={setNewMessage}
              onKeyPress={handleKeyPress}
              className="chat__input"
            />
            
            <Button
              appearance="primary"
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="chat__send-btn"
            >
              <Send />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}