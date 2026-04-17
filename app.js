// ==========================================
// КОНФИГУРАЦИЯ - ЛЕГКО ИЗМЕНЯЙТЕ ЗДЕСЬ!
// ==========================================

// Настройки баланса
const CONFIG = {
    startBalance: 100
};

// Пакеты для пополнения
const TOPUP_OPTIONS = [
    { amount: 50, stars: 1 },
    { amount: 100, stars: 2 },
    { amount: 250, stars: 5 },
    { amount: 500, stars: 10 },
    { amount: 1000, stars: 20 }
];

// Обычные подарки (просто добавьте объект ниже)
const REGULAR_GIFTS = [
    { icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f381.png', name: 'Подарок', value: 5 },
    { icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f339.png', name: 'Роза', value: 1 },
    { icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f337.png', name: 'Тюльпан', value: 2 },
    { icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/2764.png', name: 'Сердце', value: 3 },
    { icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f525.png', name: 'Огонёк', value: 4 },
    { icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/2b50.png', name: 'Звезда', value: 6 },
    { icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f451.png', name: 'Корона', value: 25 },
    { icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f48e.png', name: 'Алмаз', value: 50 },
    { icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f382.png', name: 'Торт', value: 10 },
    { icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f389.png', name: 'Праздник', value: 15 },
    { icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f3a8.png', name: 'Палитра', value: 8 },
    { icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f3ad.png', name: 'Маска', value: 12 },
    { icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f984.png', name: 'Единорог', value: 30 },
    { icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f308.png', name: 'Радуга', value: 20 },
    { icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f680.png', name: 'Ракета', value: 40 }
];

// Выводимые подарки (isWithdrawable: true)
const SPECIAL_GIFTS = [
    { icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f48e.png', name: 'Супер Алмаз', value: 200, isWithdrawable: true },
    { icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f451.png', name: 'Золотая Корона', value: 150, isWithdrawable: true },
    { icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f984.png', name: 'Легендарный Единорог', value: 300, isWithdrawable: true },
    { icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f31f.png', name: 'Светящаяся Звезда', value: 180, isWithdrawable: true },
    { icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f389.png', name: 'Великий Праздник', value: 250, isWithdrawable: true }
];

// Кейсы и ШАНСЫ ВЫПАДЕНИЯ! Изменяйте chance как хотите!
const CASES = [
    {
        id: 1,
        name: 'Базовый кейс',
        icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4e6.png',
        price: 10,
        prizes: [
            { ...REGULAR_GIFTS[0], chance: 25 },
            { ...REGULAR_GIFTS[1], chance: 30 },
            { ...REGULAR_GIFTS[2], chance: 25 },
            { ...REGULAR_GIFTS[3], chance: 15 },
            { ...SPECIAL_GIFTS[0], chance: 5 }
        ]
    },
    {
        id: 2,
        name: 'Премиум кейс',
        icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f49d.png',
        price: 25,
        prizes: [
            { ...REGULAR_GIFTS[3], chance: 20 },
            { ...REGULAR_GIFTS[4], chance: 25 },
            { ...REGULAR_GIFTS[5], chance: 25 },
            { ...REGULAR_GIFTS[8], chance: 15 },
            { ...SPECIAL_GIFTS[1], chance: 10 },
            { ...SPECIAL_GIFTS[3], chance: 5 }
        ]
    },
    {
        id: 3,
        name: 'Элитный кейс',
        icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f451.png',
        price: 50,
        prizes: [
            { ...REGULAR_GIFTS[8], chance: 20 },
            { ...REGULAR_GIFTS[9], chance: 25 },
            { ...REGULAR_GIFTS[11], chance: 20 },
            { ...REGULAR_GIFTS[6], chance: 15 },
            { ...SPECIAL_GIFTS[1], chance: 10 },
            { ...SPECIAL_GIFTS[2], chance: 5 },
            { ...SPECIAL_GIFTS[4], chance: 5 }
        ]
    },
    {
        id: 4,
        name: 'Легендарный кейс',
        icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f984.png',
        price: 100,
        prizes: [
            { ...REGULAR_GIFTS[9], chance: 15 },
            { ...REGULAR_GIFTS[6], chance: 20 },
            { ...REGULAR_GIFTS[12], chance: 20 },
            { ...REGULAR_GIFTS[7], chance: 15 },
            { ...SPECIAL_GIFTS[0], chance: 10 },
            { ...SPECIAL_GIFTS[2], chance: 10 },
            { ...SPECIAL_GIFTS[4], chance: 10 }
        ]
    }
];

// ==========================================
// КОНЕЦ КОНФИГУРАЦИИ - НЕ ИЗМЕНЯЙТЕ НИЖЕ!
// ==========================================

let balance = CONFIG.startBalance;
let selectedCase = null;
let isSpinning = false;
let history = [];
let inventory = [];
let lastPrize = null;

const topupOptions = TOPUP_OPTIONS;
const specialGifts = SPECIAL_GIFTS;
const telegramGifts = REGULAR_GIFTS;
const cases = CASES;

document.addEventListener('DOMContentLoaded', () => {
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
        
        window.Telegram.WebApp.onEvent('invoiceClosed', (data) => {
            if (data.status === 'paid') {
                alert('✅ Оплата успешна! Перезапустите приложение для обновления баланса.');
            }
        });
    }
    
    renderTopupOptions();
    renderCases();
    renderInventory();
    updateBalanceDisplay();
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => switchTab(e.target.dataset.tab));
    });
    
    document.getElementById('spinBtn').addEventListener('click', spinCase);
    document.getElementById('closeBtn').addEventListener('click', closeResult);
    document.getElementById('sellBtnPopup').addEventListener('click', sellLastPrize);
    
    document.getElementById('balanceContainer').addEventListener('click', openTopupPopup);
    document.getElementById('closeTopupBtn').addEventListener('click', closeTopupPopup);
});

function renderTopupOptions() {
    const container = document.getElementById('topupOptions');
    container.innerHTML = '';
    
    topupOptions.forEach(option => {
        const div = document.createElement('div');
        div.className = 'topup-option';
        div.innerHTML = `
            <div class="topup-amount">⭐ ${option.amount}</div>
            <div class="topup-price">${option.stars} ⭐ Telegram</div>
        `;
        div.addEventListener('click', () => topupBalance(option));
        container.appendChild(div);
    });
}

function openTopupPopup() {
    document.getElementById('topupPopup').style.display = 'flex';
}

function closeTopupPopup() {
    document.getElementById('topupPopup').style.display = 'none';
}

function topupBalance(option) {
    if (window.Telegram && window.Telegram.WebApp) {
        if (window.Telegram.WebApp.sendData) {
            window.Telegram.WebApp.sendData(JSON.stringify({
                type: 'create_invoice',
                amount: option.amount,
                stars: option.stars
            }));
            closeTopupPopup();
        } else {
            alert('⚠️ Бот не запущен или не подключен!\n\nДля покупки звёзд запустите бота и откройте приложение через Telegram.');
        }
    } else {
        alert('⚠️ Демо-режим!\n\nДля покупки настоящих звёзд откройте приложение через Telegram и запустите бот.');
    }
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    document.getElementById('casesTab').style.display = tabName === 'cases' ? 'block' : 'none';
    document.getElementById('inventoryTab').style.display = tabName === 'inventory' ? 'block' : 'none';
}

function renderCases() {
    const grid = document.getElementById('casesGrid');
    grid.innerHTML = '';
    
    cases.forEach(caseItem => {
        const card = document.createElement('div');
        card.className = 'case-card';
        card.innerHTML = `
            <img src="${caseItem.icon}" alt="" class="case-icon">
            <div class="case-name">${caseItem.name}</div>
            <div class="case-price">⭐ ${caseItem.price}</div>
        `;
        card.addEventListener('click', () => selectCase(caseItem));
        grid.appendChild(card);
    });
}

function selectCase(caseItem) {
    if (balance < caseItem.price) {
        alert('Недостаточно звезд!');
        return;
    }
    
    selectedCase = caseItem;
    document.getElementById('spinSection').style.display = 'block';
    document.getElementById('spinningItem').innerHTML = `<img src="${caseItem.prizes[0].icon}" alt="" style="width: 80px; height: 80px;">`;
    window.scrollTo({ top: document.getElementById('spinSection').offsetTop - 20, behavior: 'smooth' });
}

function spinCase() {
    if (!selectedCase || isSpinning || balance < selectedCase.price) return;
    
    isSpinning = true;
    balance -= selectedCase.price;
    updateBalanceDisplay();
    
    const spinBtn = document.getElementById('spinBtn');
    spinBtn.disabled = true;
    spinBtn.textContent = 'Крутим...';
    
    const spinningItem = document.getElementById('spinningItem');
    const prizes = selectedCase.prizes;
    let spinCount = 0;
    const totalSpins = 30;
    
    const spinInterval = setInterval(() => {
        const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
        spinningItem.innerHTML = `<img src="${randomPrize.icon}" alt="" style="width: 80px; height: 80px;">`;
        spinningItem.style.transform = `rotate(${spinCount * 15}deg)`;
        spinCount++;
        
        if (spinCount >= totalSpins) {
            clearInterval(spinInterval);
            const finalPrize = getRandomPrize(prizes);
            lastPrize = { ...finalPrize, id: Date.now() };
            spinningItem.innerHTML = `<img src="${finalPrize.icon}" alt="" style="width: 80px; height: 80px;">`;
            spinningItem.style.transform = 'rotate(0deg)';
            
            setTimeout(() => {
                showResult(finalPrize);
                addToHistory(finalPrize, selectedCase);
                isSpinning = false;
                spinBtn.disabled = false;
                spinBtn.textContent = 'Крутить!';
            }, 500);
        }
    }, 80);
}

function getRandomPrize(prizes) {
    const total = prizes.reduce((sum, prize) => sum + prize.chance, 0);
    let random = Math.random() * total;
    
    for (const prize of prizes) {
        random -= prize.chance;
        if (random <= 0) {
            return prize;
        }
    }
    return prizes[0];
}

function showResult(prize) {
    document.getElementById('prizeDisplay').innerHTML = `<img src="${prize.icon}" alt="" style="width: 100px; height: 100px;">`;
    document.getElementById('prizeName').textContent = prize.name;
    document.getElementById('prizeValue').textContent = `Стоимость: ⭐ ${prize.value}`;
    document.getElementById('resultPopup').style.display = 'flex';
}

function closeResult() {
    if (lastPrize) {
        inventory.push(lastPrize);
        renderInventory();
        lastPrize = null;
    }
    document.getElementById('resultPopup').style.display = 'none';
}

function sellLastPrize() {
    if (lastPrize) {
        balance += lastPrize.value;
        updateBalanceDisplay();
        lastPrize = null;
    }
    document.getElementById('resultPopup').style.display = 'none';
}

function addToHistory(prize, caseItem) {
    const now = new Date();
    history.unshift({
        prize,
        case: caseItem,
        time: now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    });
    
    if (history.length > 10) {
        history.pop();
    }
    
    renderHistory();
}

function renderHistory() {
    const list = document.getElementById('historyList');
    list.innerHTML = '';
    
    history.forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.innerHTML = `
            <div class="history-prize">
                <img src="${item.prize.icon}" alt="" class="history-icon">
                <span>${item.prize.name} из ${item.case.name}</span>
            </div>
            <span class="history-time">${item.time}</span>
        `;
        list.appendChild(div);
    });
}

function renderInventory() {
    const grid = document.getElementById('inventoryGrid');
    grid.innerHTML = '';
    
    if (inventory.length === 0) {
        grid.innerHTML = '<div class="empty-inventory">🎒 Инвентарь пуст</div>';
        return;
    }
    
    inventory.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'inventory-item';
        
        if (item.isWithdrawable) {
            div.innerHTML = `
                <img src="${item.icon}" alt="" class="inventory-icon">
                <div class="inventory-name">${item.name}</div>
                <div class="inventory-value">⭐ ${item.value}</div>
                <div style="margin-bottom: 8px; font-size: 12px; color: #38ef7d; font-weight: bold;">✨ Выводимый</div>
                <div style="display: flex; gap: 8px; flex-direction: column;">
                    <button class="withdraw-btn" onclick="withdrawItem(${index})">🚀 Вывести</button>
                    <button class="sell-btn" onclick="sellItem(${index})">💰 Продать</button>
                </div>
            `;
        } else {
            div.innerHTML = `
                <img src="${item.icon}" alt="" class="inventory-icon">
                <div class="inventory-name">${item.name}</div>
                <div class="inventory-value">⭐ ${item.value}</div>
                <button class="sell-btn" onclick="sellItem(${index})">💰 Продать</button>
            `;
        }
        
        grid.appendChild(div);
    });
}

function withdrawItem(index) {
    const item = inventory[index];
    const user = window.Telegram && window.Telegram.WebApp ? 
        window.Telegram.WebApp.initDataUnsafe.user : 
        { username: 'demo_user', id: 123456 };
    
    const message = `🎁 Заявка на вывод подарка!\n\n👤 Пользователь: ${user.username || 'ID: ' + user.id}\n🎁 Подарок: ${item.name}\n💎 Стоимость: ⭐ ${item.value}`;
    
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.sendData) {
        window.Telegram.WebApp.sendData(JSON.stringify({
            type: 'withdraw',
            user: user,
            gift: item
        }));
        alert('✅ Заявка на вывод отправлена администартору!');
    } else {
        alert('📋 Демо-режим!\n\n' + message + '\n\nВ реальной версии это отправляется администартору в Telegram.');
    }
    
    inventory.splice(index, 1);
    renderInventory();
}

function sellItem(index) {
    const item = inventory[index];
    balance += item.value;
    inventory.splice(index, 1);
    updateBalanceDisplay();
    renderInventory();
}

function updateBalanceDisplay() {
    document.getElementById('balance').textContent = balance;
}
