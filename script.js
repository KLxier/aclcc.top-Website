// 切换关卡展开/收缩
function toggleLevel(header) {
    const content = header.nextElementSibling;
    const toggle = header.querySelector('.level-toggle');
    
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        toggle.textContent = '+';
    } else {
        // 关闭其他打开的关卡
        document.querySelectorAll('.level-content.active').forEach(item => {
            item.classList.remove('active');
            item.previousElementSibling.querySelector('.level-toggle').textContent = '+';
        });
        
        content.classList.add('active');
        toggle.textContent = '-';
    }
}

// 移动端导航菜单切换
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// 页面切换功能
function switchPage(pageId) {
    // 隐藏所有页面
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // 显示目标页面
    document.getElementById(pageId).classList.add('active');
    
    // 更新导航链接状态
    document.querySelectorAll('.nav-link').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-page') === pageId) {
            item.classList.add('active');
        }
    });
    
    // 保存当前页面到本地存储
    localStorage.setItem('currentPage', pageId);
    
    // 在移动端点击后关闭菜单
    if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
}

// 导航链接点击事件


// 随机提示功能
const tips = [
    "这是一条Tips",
    "这不是一条Tips",
    "以防你不知道ACLCC以前其实叫ACLC（雾）",
    "We Want To Go Part1中有一个彩蛋",
    "Tips: Tips: Tips: Tips: Tips: Tips: Tips: Tips: Tips: Tips: Tips: Tips: Tips: Tips: Tips: Tips: Tips:",
    "你知道吗，在这个网站里其实藏了一个彩蛋（）"
];

function showRandomTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    const tipElement = document.getElementById('randomTip');
    tipElement.textContent = tips[randomIndex];
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', function() {
    showRandomTip();
    
    // 从本地存储获取上次访问的页面，如果没有则默认为主页
    const savedPage = localStorage.getItem('currentPage') || 'home';
    switchPage(savedPage);
});