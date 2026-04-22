const BACKGROUND_THEME_LABELS = {
    chill: "Chill",
    rain: "Mưa",
    sunset: "Hoàng hôn",
    storm: "Bão",
    love: "Tình yêu",
    neon: "Neon",
    cyberpunk: "Cyberpunk"
};

const TIME_TRAVEL_COPY = {
    past: "Quá khứ gợi cảm giác retro, tập trung vào ký ức, công nghệ cũ và nhịp sống chậm hơn.",
    present: "Hiện tại cân bằng giữa dữ liệu trực tiếp, thói quen cá nhân và giao diện hiện đại để bạn kiểm soát thời gian.",
    future: "Tương lai mang màu sci-fi, tự động hóa mạnh, cảnh báo thông minh và mọi thứ đều chạy theo timeline của bạn."
};

const GIFT_WISHES = [
    "Chúc cậu luôn giữ được sự tò mò và lì đòn với những mục tiêu lớn hơn chính mình.",
    "Mỗi lần mở hộp quà là một lời nhắc: cậu đã đi được xa hơn cậu tưởng rồi.",
    "Sinh nhật vui vẻ. Hãy nhớ nghỉ ngơi, ăn ngon và tự thưởng cho bản thân một ngày đáng nhớ.",
    "Chúc cậu có đủ bình tĩnh để học tốt và đủ điên để làm điều mình thật sự thích.",
    "Mong rằng phiên bản hiện tại của cậu vẫn dũng cảm như phiên bản mơ ước."
];

const FUTURE_MESSAGES = [
    "Chào cậu... tớ là cậu của 5 năm sau.\nCậu sẽ ổn thôi. Những ngày hoang mang rồi cũng thành dữ liệu để cậu mạnh hơn.",
    "Chào cậu... đừng coi nhẹ từng ngày nhỏ.\nThứ thay đổi tương lai không phải một cú nổ lớn, mà là chuỗi lần cậu không bỏ cuộc.",
    "Tớ của 5 năm sau đây.\nCó một tin tốt: cậu không cần hoàn hảo. Cậu chỉ cần tiếp tục.",
    "Tin nhắn từ tương lai:\nNgủ sớm hơn một chút, bớt tự dằn vặt và giữ cái đầu lạnh trước deadline.",
    "Tớ nhắn nhẹ thôi: nếu hôm nay lười quá thì thôi đừng lười hết cả ngày. Cứ làm 15 phút trước đã."
];

const SHOP_ITEMS = {
    focus_skin: { name: "Giao diện tập trung", cost: 20 },
    extra_message: { name: "Mở thêm thư tương lai", cost: 35 },
    cosmic_glow: { name: "Hào quang ngân hà", cost: 50 }
};

const state = {
    stopwatch: {
        running: false,
        elapsedMs: 0,
        laps: [],
        history: []
    },
    timer: {
        running: false,
        totalSeconds: 0,
        remainingSeconds: 0
    },
    pomodoro: {
        running: false,
        phase: "focus",
        cycle: 0,
        totalSeconds: 25 * 60,
        remainingSeconds: 25 * 60
    },
    deepWork: {
        running: false,
        totalSeconds: 45 * 60,
        remainingSeconds: 45 * 60,
        level: 1,
        xp: 0,
        goal: "",
        ambient: "lofi"
    },
    birthday: {
        name: "",
        birthDate: "",
        examDate: "",
        secretPassword: "",
        secretGoals: "",
        futureIndex: 0,
        giftIndex: 0
    },
    travel: {
        year: 2026,
        mode: "present",
        speedPercent: 60,
        simulatedTime: new Date()
    },
    deadline: {
        title: "",
        date: "",
        createdAt: ""
    },
    currency: {
        coins: 0,
        inventory: []
    },
    memories: [],
    alarms: [],
    worldClocks: [],
    timeFormat: "24h",
    currentTheme: "modern",
    backgroundTheme: "chill",
    ringtone: {
        fileName: "",
        url: ""
    }
};

const els = {
    digitalClock: document.getElementById("digitalClock"),
    dateDisplay: document.getElementById("dateDisplay"),
    lunarDisplay: document.getElementById("lunarDisplay"),
    timezoneDisplay: document.getElementById("timezoneDisplay"),
    analogClock: document.getElementById("analogClock"),
    themeBtn: document.getElementById("themeBtn"),
    fullscreenBtn: document.getElementById("fullscreenBtn"),
    navButtons: document.querySelectorAll(".nav-btn"),
    tabs: document.querySelectorAll(".tab-content"),
    themeOptions: document.querySelectorAll(".theme-option"),
    helpModal: document.getElementById("helpModal"),
    helpBtn: document.getElementById("helpBtn"),
    closeBtn: document.querySelector(".close"),
    copyTimeBtn: document.getElementById("copyTimeBtn"),
    timeFormatSelect: document.getElementById("timeFormatSelect"),
    darkModeToggle: document.getElementById("darkModeToggle"),
    clearHistoryBtn: document.getElementById("clearHistoryBtn"),
    clearAllBtn: document.getElementById("clearAllBtn"),
    backgroundThemeOptions: document.querySelectorAll(".background-theme-option"),
    backgroundThemeLabel: document.getElementById("backgroundThemeLabel"),

    stopwatchTime: document.getElementById("stopwatchTime"),
    stopwatchMs: document.getElementById("stopwatchMs"),
    startBtn: document.getElementById("startBtn"),
    pauseBtn: document.getElementById("pauseBtn"),
    resetBtn: document.getElementById("resetBtn"),
    lapBtn: document.getElementById("lapBtn"),
    historyBtn: document.getElementById("historyBtn"),
    lapsList: document.getElementById("lapsList"),

    timerHours: document.getElementById("timerHours"),
    timerMinutes: document.getElementById("timerMinutes"),
    timerSeconds: document.getElementById("timerSeconds"),
    timerDisplay: document.getElementById("timerDisplay"),
    timerProgressBar: document.getElementById("timerProgressBar"),
    timerStartBtn: document.getElementById("timerStartBtn"),
    timerPauseBtn: document.getElementById("timerPauseBtn"),
    timerResetBtn: document.getElementById("timerResetBtn"),

    alarmTime: document.getElementById("alarmTime"),
    alarmLabel: document.getElementById("alarmLabel"),
    addAlarmBtn: document.getElementById("addAlarmBtn"),
    alarmsList: document.getElementById("alarmsList"),
    noAlarms: document.getElementById("noAlarms"),
    exportAlarmsBtn: document.getElementById("exportAlarmsBtn"),
    importAlarmsInput: document.getElementById("importAlarmsInput"),
    ringtoneInput: document.getElementById("ringtoneInput"),
    ringtoneName: document.getElementById("ringtoneName"),
    testRingtoneBtn: document.getElementById("testRingtoneBtn"),
    stopRingtoneBtn: document.getElementById("stopRingtoneBtn"),
    alarmAudio: document.getElementById("alarmAudio"),

    pomodoroTask: document.getElementById("pomodoroTask"),
    pomodoroFocusMinutes: document.getElementById("pomodoroFocusMinutes"),
    pomodoroShortBreak: document.getElementById("pomodoroShortBreak"),
    pomodoroLongBreak: document.getElementById("pomodoroLongBreak"),
    pomodoroMode: document.getElementById("pomodoroMode"),
    pomodoroDisplay: document.getElementById("pomodoroDisplay"),
    pomodoroCurrentTask: document.getElementById("pomodoroCurrentTask"),
    pomodoroCycle: document.getElementById("pomodoroCycle"),
    pomodoroStatus: document.getElementById("pomodoroStatus"),
    pomodoroProgressBar: document.getElementById("pomodoroProgressBar"),
    pomodoroStartBtn: document.getElementById("pomodoroStartBtn"),
    pomodoroPauseBtn: document.getElementById("pomodoroPauseBtn"),
    pomodoroSkipBtn: document.getElementById("pomodoroSkipBtn"),
    pomodoroResetBtn: document.getElementById("pomodoroResetBtn"),

    profileName: document.getElementById("profileName"),
    birthDateInput: document.getElementById("birthDateInput"),
    examDateInput: document.getElementById("examDateInput"),
    secretPasswordInput: document.getElementById("secretPasswordInput"),
    saveProfileBtn: document.getElementById("saveProfileBtn"),
    futureMessageBtn: document.getElementById("futureMessageBtn"),
    birthdayHero: document.getElementById("birthdayHero"),
    birthdayHeadline: document.getElementById("birthdayHeadline"),
    birthdaySubline: document.getElementById("birthdaySubline"),
    birthdayCountdownChip: document.getElementById("birthdayCountdownChip"),
    celebrationBanner: document.getElementById("celebrationBanner"),
    giftBoxBtn: document.getElementById("giftBoxBtn"),
    giftMessage: document.getElementById("giftMessage"),
    confettiLayer: document.getElementById("confettiLayer"),
    lifeAge: document.getElementById("lifeAge"),
    lifeDays: document.getElementById("lifeDays"),
    lifeSleep: document.getElementById("lifeSleep"),
    lifeGame: document.getElementById("lifeGame"),
    lifeProgressBar: document.getElementById("lifeProgressBar"),
    lifeProgressText: document.getElementById("lifeProgressText"),
    examCountdownText: document.getElementById("examCountdownText"),
    futureLetter: document.getElementById("futureLetter"),
    secretUnlockInput: document.getElementById("secretUnlockInput"),
    secretHoldBtn: document.getElementById("secretHoldBtn"),
    secretUnlockBtn: document.getElementById("secretUnlockBtn"),
    secretPanel: document.getElementById("secretPanel"),
    secretGoalsInput: document.getElementById("secretGoalsInput"),
    saveSecretGoalsBtn: document.getElementById("saveSecretGoalsBtn"),

    deepWorkGoalInput: document.getElementById("deepWorkGoalInput"),
    deepWorkMinutesInput: document.getElementById("deepWorkMinutesInput"),
    deepWorkAmbientSelect: document.getElementById("deepWorkAmbientSelect"),
    deepWorkGoalDisplay: document.getElementById("deepWorkGoalDisplay"),
    deepWorkDisplay: document.getElementById("deepWorkDisplay"),
    deepWorkLevel: document.getElementById("deepWorkLevel"),
    deepWorkXp: document.getElementById("deepWorkXp"),
    deepWorkTabWarning: document.getElementById("deepWorkTabWarning"),
    deepWorkProgressBar: document.getElementById("deepWorkProgressBar"),
    deepWorkCoinMirror: document.getElementById("deepWorkCoinMirror"),
    deepWorkHero: document.getElementById("deepworkHero"),
    deepWorkStartBtn: document.getElementById("deepWorkStartBtn"),
    deepWorkPauseBtn: document.getElementById("deepWorkPauseBtn"),
    deepWorkResetBtn: document.getElementById("deepWorkResetBtn"),

    timeTravelSlider: document.getElementById("timeTravelSlider"),
    timeTravelYear: document.getElementById("timeTravelYear"),
    timeTravelMode: document.getElementById("timeTravelMode"),
    timeTravelDescription: document.getElementById("timeTravelDescription"),
    timeSpeedSlider: document.getElementById("timeSpeedSlider"),
    timeSpeedLabel: document.getElementById("timeSpeedLabel"),
    simClockDisplay: document.getElementById("simClockDisplay"),
    timeSpeedDescription: document.getElementById("timeSpeedDescription"),

    memoryTitleInput: document.getElementById("memoryTitleInput"),
    memoryDateInput: document.getElementById("memoryDateInput"),
    memoryImageInput: document.getElementById("memoryImageInput"),
    memoryNoteInput: document.getElementById("memoryNoteInput"),
    saveMemoryBtn: document.getElementById("saveMemoryBtn"),
    memoryFlashback: document.getElementById("memoryFlashback"),
    memoryFeed: document.getElementById("memoryFeed"),

    deadlineTitleInput: document.getElementById("deadlineTitleInput"),
    deadlineDateInput: document.getElementById("deadlineDateInput"),
    saveDeadlineBtn: document.getElementById("saveDeadlineBtn"),
    deadlineMonitor: document.getElementById("deadlineMonitor"),
    deadlineTitleDisplay: document.getElementById("deadlineTitleDisplay"),
    deadlineCountdownDisplay: document.getElementById("deadlineCountdownDisplay"),
    deadlineStatusDisplay: document.getElementById("deadlineStatusDisplay"),
    deadlineProgressBar: document.getElementById("deadlineProgressBar"),

    coinCountDisplay: document.getElementById("coinCountDisplay"),
    coinSummary: document.getElementById("coinSummary"),
    earnCoinBtn: document.getElementById("earnCoinBtn"),
    wasteCoinBtn: document.getElementById("wasteCoinBtn"),
    shopGrid: document.getElementById("shopGrid"),
    shopStatusText: document.getElementById("shopStatusText"),

    timezoneSelect: document.getElementById("timezoneSelect"),
    addTimezoneBtn: document.getElementById("addTimezoneBtn"),
    timezonesGrid: document.getElementById("timezonesGrid")
};

const analogCtx = els.analogClock.getContext("2d");
let digitalClockTimeoutId = null;
let stopwatchInterval = null;
let timerInterval = null;
let pomodoroInterval = null;
let deepWorkInterval = null;
let worldClockInterval = null;
let alarmInterval = null;
let birthdayInterval = null;
let deadlineInterval = null;
let simulationInterval = null;
let holdTimeoutId = null;
let ambientAudio = null;

function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function load(key, fallback) {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    try {
        return JSON.parse(raw);
    } catch {
        return fallback;
    }
}

function formatClockTime(hours, minutes, seconds) {
    if (state.timeFormat === "12h") {
        const period = hours >= 12 ? "PM" : "AM";
        const normalized = hours % 12 || 12;
        return `${String(normalized).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${period}`;
    }

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function formatHms(totalSeconds) {
    const seconds = Math.max(0, Math.floor(totalSeconds));
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function formatMs(elapsedMs) {
    const totalSeconds = Math.floor(elapsedMs / 1000);
    const milliseconds = Math.floor((elapsedMs % 1000) / 10);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
        main: `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`,
        ms: `.${String(milliseconds).padStart(2, "0")}`
    };
}

function formatDurationWords(ms) {
    if (ms <= 0) return "Đã tới lúc";
    const totalMinutes = Math.floor(ms / 60000);
    const days = Math.floor(totalMinutes / 1440);
    const hours = Math.floor((totalMinutes % 1440) / 60);
    const minutes = totalMinutes % 60;
    return `${days} ngày ${hours} giờ ${minutes} phút`;
}

function syncAnalogCanvas() {
    const size = Math.max(220, Math.floor(els.analogClock.getBoundingClientRect().width));
    if (els.analogClock.width !== size || els.analogClock.height !== size) {
        els.analogClock.width = size;
        els.analogClock.height = size;
    }
}

function drawHand(angle, length, width, color, radius) {
    const rad = angle * Math.PI / 180;
    analogCtx.strokeStyle = color;
    analogCtx.lineWidth = width;
    analogCtx.lineCap = "round";
    analogCtx.beginPath();
    analogCtx.moveTo(radius, radius);
    analogCtx.lineTo(
        radius + Math.sin(rad) * length,
        radius - Math.cos(rad) * length
    );
    analogCtx.stroke();
}

function drawAnalogClock() {
    syncAnalogCanvas();
    const radius = els.analogClock.width / 2;
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    analogCtx.clearRect(0, 0, els.analogClock.width, els.analogClock.height);
    analogCtx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--bg-secondary").trim();
    analogCtx.beginPath();
    analogCtx.arc(radius, radius, radius - 5, 0, Math.PI * 2);
    analogCtx.fill();

    analogCtx.font = "bold 16px Arial";
    analogCtx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--text-primary").trim();
    analogCtx.textAlign = "center";
    analogCtx.textBaseline = "middle";

    for (let i = 1; i <= 12; i += 1) {
        const angle = i * Math.PI / 6;
        const x = radius + Math.sin(angle) * (radius - 28);
        const y = radius - Math.cos(angle) * (radius - 28);
        analogCtx.fillText(String(i), x, y);
    }

    drawHand(hours * 30 + minutes * 0.5, radius * 0.5, 6, "#00d4ff", radius);
    drawHand(minutes * 6 + seconds * 0.1, radius * 0.7, 4, "#00d4ff", radius);
    drawHand(seconds * 6, radius * 0.82, 2, "#ff6b6b", radius);

    analogCtx.fillStyle = "#00d4ff";
    analogCtx.beginPath();
    analogCtx.arc(radius, radius, 8, 0, Math.PI * 2);
    analogCtx.fill();

    requestAnimationFrame(drawAnalogClock);
}

function updateLunarCalendar(date) {
    try {
        const formatter = new Intl.DateTimeFormat("vi-VN-u-ca-chinese", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
        const parts = formatter.formatToParts(date);
        const day = parts.find(part => part.type === "day")?.value || "--";
        const month = parts.find(part => part.type === "month")?.value || "--";
        const year = parts.find(part => part.type === "relatedYear")?.value
            || parts.find(part => part.type === "year")?.value
            || "----";

        els.lunarDisplay.textContent = `Âm lịch: ngày ${day}, tháng ${month}, năm ${year}`;
    } catch {
        els.lunarDisplay.textContent = "Âm lịch: trình duyệt chưa hỗ trợ";
    }
}

function updateDigitalClock() {
    const now = new Date();
    els.digitalClock.textContent = formatClockTime(now.getHours(), now.getMinutes(), now.getSeconds());
    els.dateDisplay.textContent = now.toLocaleDateString("vi-VN", {
        weekday: "long",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });
    updateLunarCalendar(now);

    const offset = -now.getTimezoneOffset();
    const sign = offset >= 0 ? "+" : "-";
    const offsetHours = Math.floor(Math.abs(offset) / 60);
    const offsetMinutes = Math.abs(offset) % 60;
    els.timezoneDisplay.textContent = `UTC${sign}${String(offsetHours).padStart(2, "0")}:${String(offsetMinutes).padStart(2, "0")}`;

    clearTimeout(digitalClockTimeoutId);
    digitalClockTimeoutId = setTimeout(updateDigitalClock, 1000);
}

function copyTime(button) {
    navigator.clipboard.writeText(els.digitalClock.textContent).then(() => {
        const original = button.innerHTML;
        button.innerHTML = "<i class='fas fa-check'></i>";
        setTimeout(() => {
            button.innerHTML = original;
        }, 1200);
    }).catch(error => {
        alert(`Không thể sao chép: ${error}`);
    });
}

function switchTab(tabName, buttonEl) {
    els.tabs.forEach(tab => tab.classList.remove("active"));
    els.navButtons.forEach(button => button.classList.remove("active"));
    document.getElementById(tabName)?.classList.add("active");
    buttonEl?.classList.add("active");
}

function updateThemeButton() {
    const darkMode = document.body.classList.contains("dark-mode");
    els.themeBtn.innerHTML = darkMode ? "<i class='fas fa-sun'></i>" : "<i class='fas fa-moon'></i>";
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    updateThemeButton();
}

function applyClockTheme(theme) {
    state.currentTheme = theme;
    localStorage.setItem("clockTheme", theme);
    document.body.classList.remove("theme-modern", "theme-elegant", "theme-minimal", "theme-neon");
    document.body.classList.add(`theme-${theme}`);
    els.themeOptions.forEach(option => {
        option.classList.toggle("active", option.dataset.theme === theme);
    });
}

function applyBackgroundTheme(theme) {
    state.backgroundTheme = theme;
    document.body.dataset.backgroundTheme = theme;
    localStorage.setItem("backgroundTheme", theme);

    els.backgroundThemeOptions.forEach(option => {
        option.classList.toggle("active", option.dataset.backgroundTheme === theme);
    });

    els.backgroundThemeLabel.textContent = `Đang dùng: ${BACKGROUND_THEME_LABELS[theme] || theme}`;
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
    } else {
        document.exitFullscreen();
    }
}

function updateStopwatchDisplay() {
    const formatted = formatMs(state.stopwatch.elapsedMs);
    els.stopwatchTime.textContent = formatted.main;
    els.stopwatchMs.textContent = formatted.ms;
}

function renderLaps() {
    els.lapsList.innerHTML = "";
    state.stopwatch.laps.slice().reverse().forEach((lap, reverseIndex) => {
        const item = document.createElement("li");
        const lapNumber = state.stopwatch.laps.length - reverseIndex;
        item.innerHTML = `<span class="lap-number">Lần #${lapNumber}</span><span>${formatHms(Math.floor(lap / 1000))}</span>`;
        els.lapsList.appendChild(item);
    });
}

function startStopwatch() {
    if (state.stopwatch.running) return;
    state.stopwatch.running = true;
    els.startBtn.disabled = true;
    els.pauseBtn.disabled = false;
    els.lapBtn.disabled = false;

    const startedAt = Date.now() - state.stopwatch.elapsedMs;
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(() => {
        state.stopwatch.elapsedMs = Date.now() - startedAt;
        updateStopwatchDisplay();
    }, 10);
}

function pauseStopwatch() {
    state.stopwatch.running = false;
    clearInterval(stopwatchInterval);
    els.startBtn.disabled = false;
    els.pauseBtn.disabled = true;
}

function resetStopwatch() {
    if (state.stopwatch.elapsedMs > 0) {
        state.stopwatch.history.unshift({
            time: state.stopwatch.elapsedMs,
            date: new Date().toLocaleString("vi-VN"),
            laps: [...state.stopwatch.laps]
        });
        save("stopwatchHistory", state.stopwatch.history);
    }

    state.stopwatch.running = false;
    state.stopwatch.elapsedMs = 0;
    state.stopwatch.laps = [];
    clearInterval(stopwatchInterval);
    els.startBtn.disabled = false;
    els.pauseBtn.disabled = true;
    els.lapBtn.disabled = true;
    updateStopwatchDisplay();
    renderLaps();
}

function recordLap() {
    if (!state.stopwatch.running) return;
    state.stopwatch.laps.push(state.stopwatch.elapsedMs);
    renderLaps();
}

function showStopwatchHistory() {
    if (state.stopwatch.history.length === 0) {
        alert("Chưa có lịch sử bấm giờ");
        return;
    }

    const message = state.stopwatch.history.map((entry, index) => {
        return `${index + 1}. ${formatHms(Math.floor(entry.time / 1000))} - ${entry.date}`;
    }).join("\n");

    alert(message);
}

function clearStopwatchHistory() {
    if (!confirm("Bạn chắc chắn muốn xóa lịch sử bấm giờ?")) return;
    state.stopwatch.history = [];
    save("stopwatchHistory", state.stopwatch.history);
}

function getTimerInputSeconds() {
    const hours = parseInt(els.timerHours.value, 10) || 0;
    const minutes = parseInt(els.timerMinutes.value, 10) || 0;
    const seconds = parseInt(els.timerSeconds.value, 10) || 0;
    return hours * 3600 + minutes * 60 + seconds;
}

function updateTimerDisplay() {
    els.timerDisplay.textContent = formatHms(state.timer.remainingSeconds);
    const progress = state.timer.totalSeconds > 0
        ? (state.timer.remainingSeconds / state.timer.totalSeconds) * 100
        : 100;
    els.timerProgressBar.style.width = `${Math.max(0, Math.min(100, progress))}%`;
}

function updateTimerInputPreview() {
    state.timer.remainingSeconds = getTimerInputSeconds();
    state.timer.totalSeconds = state.timer.remainingSeconds;
    updateTimerDisplay();
}

function startTimer() {
    if (state.timer.running) return;
    if (state.timer.remainingSeconds <= 0) {
        state.timer.remainingSeconds = getTimerInputSeconds();
        state.timer.totalSeconds = state.timer.remainingSeconds;
    }
    if (state.timer.remainingSeconds <= 0) return;

    state.timer.running = true;
    els.timerStartBtn.disabled = true;
    els.timerPauseBtn.disabled = false;
    els.timerHours.disabled = true;
    els.timerMinutes.disabled = true;
    els.timerSeconds.disabled = true;

    const endTime = Date.now() + state.timer.remainingSeconds * 1000;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        state.timer.remainingSeconds = Math.max(0, Math.round((endTime - Date.now()) / 1000));
        updateTimerDisplay();
        if (state.timer.remainingSeconds <= 0) completeTimer();
    }, 250);
}

function pauseTimer() {
    state.timer.running = false;
    clearInterval(timerInterval);
    els.timerStartBtn.disabled = false;
    els.timerPauseBtn.disabled = true;
}

function resetTimer() {
    state.timer.running = false;
    state.timer.totalSeconds = 0;
    state.timer.remainingSeconds = getTimerInputSeconds();
    clearInterval(timerInterval);
    els.timerStartBtn.disabled = false;
    els.timerPauseBtn.disabled = true;
    els.timerHours.disabled = false;
    els.timerMinutes.disabled = false;
    els.timerSeconds.disabled = false;
    updateTimerDisplay();
}

function completeTimer() {
    clearInterval(timerInterval);
    state.timer.running = false;
    state.timer.totalSeconds = 0;
    state.timer.remainingSeconds = 0;
    els.timerStartBtn.disabled = false;
    els.timerPauseBtn.disabled = true;
    els.timerHours.disabled = false;
    els.timerMinutes.disabled = false;
    els.timerSeconds.disabled = false;
    playDefaultBeep();
    updateTimerDisplay();
    alert("Hết giờ");
}

function stopAlarmSound() {
    els.alarmAudio.pause();
    els.alarmAudio.currentTime = 0;
    els.alarmAudio.loop = false;
}

function playDefaultBeep() {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    oscillator.frequency.value = 820;
    gainNode.gain.setValueAtTime(0.22, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.35);
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + 0.35);
}

function playAlarmSound(loop = false) {
    if (state.ringtone.url) {
        stopAlarmSound();
        els.alarmAudio.src = state.ringtone.url;
        els.alarmAudio.loop = loop;
        els.alarmAudio.play().catch(() => playDefaultBeep());
        return;
    }

    playDefaultBeep();
}

function setCustomRingtone(file) {
    if (!file) return;

    if (state.ringtone.url) {
        URL.revokeObjectURL(state.ringtone.url);
    }

    state.ringtone.fileName = file.name;
    state.ringtone.url = URL.createObjectURL(file);
    localStorage.setItem("ringtoneFileName", file.name);
    updateRingtoneLabel();
}

function updateRingtoneLabel() {
    if (state.ringtone.url) {
        els.ringtoneName.textContent = `Đã chọn: ${state.ringtone.fileName}`;
        return;
    }

    els.ringtoneName.textContent = state.ringtone.fileName
        ? `Đã ghi nhớ: ${state.ringtone.fileName}. Bạn cần chọn lại tệp sau khi tải lại trang.`
        : "Đang dùng âm thanh mặc định";
}

function saveAlarms() {
    save("clockAlarms", state.alarms.map(alarm => ({
        id: alarm.id,
        time: alarm.time,
        label: alarm.label,
        enabled: alarm.enabled
    })));
}

function renderAlarms() {
    els.alarmsList.innerHTML = "";
    els.noAlarms.style.display = state.alarms.length === 0 ? "block" : "none";

    state.alarms.forEach(alarm => {
        const item = document.createElement("li");
        item.className = "alarm-item";
        item.innerHTML = `
            <div class="alarm-info">
                <div class="alarm-time">${alarm.time}</div>
                <div class="alarm-label">${alarm.label}</div>
            </div>
            <button class="alarm-toggle ${alarm.enabled ? "active" : ""}" data-action="toggle"></button>
            <button class="alarm-delete" data-action="delete">
                <i class="fas fa-trash"></i>
            </button>
        `;

        item.querySelector("[data-action='toggle']").addEventListener("click", () => {
            alarm.enabled = !alarm.enabled;
            saveAlarms();
            renderAlarms();
        });

        item.querySelector("[data-action='delete']").addEventListener("click", () => {
            state.alarms = state.alarms.filter(entry => entry.id !== alarm.id);
            saveAlarms();
            renderAlarms();
        });

        els.alarmsList.appendChild(item);
    });
}

function addAlarm() {
    if (!els.alarmTime.value) {
        alert("Vui lòng chọn thời gian");
        return;
    }

    state.alarms.push({
        id: Date.now(),
        time: els.alarmTime.value,
        label: els.alarmLabel.value.trim() || "Báo thức",
        enabled: true,
        triggered: false
    });
    els.alarmLabel.value = "";
    saveAlarms();
    renderAlarms();
}

function triggerAlarm(alarm) {
    playAlarmSound(true);
    if ("Notification" in window && Notification.permission === "granted") {
        new Notification(`Báo thức: ${alarm.label}`, {
            body: `Báo thức lúc ${alarm.time}`,
            tag: `alarm-${alarm.id}`,
            requireInteraction: true
        });
    }
}

function checkAlarms() {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    state.alarms.forEach(alarm => {
        if (alarm.enabled && alarm.time === currentTime && !alarm.triggered) {
            alarm.triggered = true;
            triggerAlarm(alarm);
            setTimeout(() => {
                alarm.triggered = false;
            }, 60000);
        }
    });
}

function exportAlarms() {
    const blob = new Blob([JSON.stringify(state.alarms, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `alarms-backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

function importAlarms(file) {
    const reader = new FileReader();
    reader.onload = event => {
        try {
            const alarms = JSON.parse(event.target.result);
            if (!Array.isArray(alarms)) throw new Error("Tệp không hợp lệ");

            state.alarms = alarms.map(alarm => ({
                id: alarm.id || Date.now() + Math.random(),
                time: alarm.time,
                label: alarm.label || "Báo thức",
                enabled: alarm.enabled !== false,
                triggered: false
            }));
            saveAlarms();
            renderAlarms();
        } catch (error) {
            alert(`Lỗi nhập tệp: ${error.message}`);
        }
    };
    reader.readAsText(file);
}

function getPomodoroDurations() {
    return {
        focus: Math.max(1, parseInt(els.pomodoroFocusMinutes.value, 10) || 25) * 60,
        shortBreak: Math.max(3, parseInt(els.pomodoroShortBreak.value, 10) || 5) * 60,
        longBreak: Math.max(15, parseInt(els.pomodoroLongBreak.value, 10) || 20) * 60
    };
}

function getPomodoroPhaseLabel(phase) {
    if (phase === "focus") return "Tập trung";
    if (phase === "shortBreak") return "Nghỉ ngắn";
    return "Nghỉ dài";
}

function updatePomodoroDisplay() {
    els.pomodoroMode.textContent = getPomodoroPhaseLabel(state.pomodoro.phase);
    els.pomodoroDisplay.textContent = `${String(Math.floor(state.pomodoro.remainingSeconds / 60)).padStart(2, "0")}:${String(state.pomodoro.remainingSeconds % 60).padStart(2, "0")}`;
    els.pomodoroCurrentTask.textContent = els.pomodoroTask.value.trim() || "Chưa có nhiệm vụ";
    els.pomodoroCycle.textContent = `Chu kỳ: ${state.pomodoro.cycle}/4`;
    els.pomodoroStatus.textContent = state.pomodoro.running ? "Trạng thái: Đang chạy" : "Trạng thái: Đang chờ";

    const progress = state.pomodoro.totalSeconds > 0
        ? (state.pomodoro.remainingSeconds / state.pomodoro.totalSeconds) * 100
        : 100;
    els.pomodoroProgressBar.style.width = `${Math.max(0, Math.min(100, progress))}%`;
}

function setPomodoroPhase(phase) {
    const durations = getPomodoroDurations();
    state.pomodoro.phase = phase;
    state.pomodoro.totalSeconds = phase === "focus"
        ? durations.focus
        : phase === "shortBreak"
            ? durations.shortBreak
            : durations.longBreak;
    state.pomodoro.remainingSeconds = state.pomodoro.totalSeconds;
    updatePomodoroDisplay();
}

function advancePomodoroPhase() {
    if (state.pomodoro.phase === "focus") {
        state.pomodoro.cycle += 1;
        setPomodoroPhase(state.pomodoro.cycle % 4 === 0 ? "longBreak" : "shortBreak");
    } else {
        setPomodoroPhase("focus");
    }
    playDefaultBeep();
}

function startPomodoro() {
    if (state.pomodoro.running) return;
    if (state.pomodoro.remainingSeconds <= 0) setPomodoroPhase(state.pomodoro.phase);

    state.pomodoro.running = true;
    els.pomodoroStartBtn.disabled = true;
    els.pomodoroPauseBtn.disabled = false;
    updatePomodoroDisplay();

    const endTime = Date.now() + state.pomodoro.remainingSeconds * 1000;
    clearInterval(pomodoroInterval);
    pomodoroInterval = setInterval(() => {
        state.pomodoro.remainingSeconds = Math.max(0, Math.round((endTime - Date.now()) / 1000));
        updatePomodoroDisplay();
        if (state.pomodoro.remainingSeconds <= 0) {
            clearInterval(pomodoroInterval);
            state.pomodoro.running = false;
            advancePomodoroPhase();
            startPomodoro();
        }
    }, 250);
}

function pausePomodoro() {
    state.pomodoro.running = false;
    clearInterval(pomodoroInterval);
    els.pomodoroStartBtn.disabled = false;
    els.pomodoroPauseBtn.disabled = true;
    updatePomodoroDisplay();
}

function skipPomodoroPhase() {
    clearInterval(pomodoroInterval);
    state.pomodoro.running = false;
    els.pomodoroStartBtn.disabled = false;
    els.pomodoroPauseBtn.disabled = true;
    advancePomodoroPhase();
}

function resetPomodoro() {
    clearInterval(pomodoroInterval);
    state.pomodoro.running = false;
    state.pomodoro.cycle = 0;
    setPomodoroPhase("focus");
    els.pomodoroStartBtn.disabled = false;
    els.pomodoroPauseBtn.disabled = true;
}

function updateCoinDisplay() {
    els.coinCountDisplay.textContent = `${state.currency.coins} xu`;
    els.deepWorkCoinMirror.textContent = `${state.currency.coins} xu`;
}

function updateDeepWorkDisplay() {
    els.deepWorkDisplay.textContent = `${String(Math.floor(state.deepWork.remainingSeconds / 60)).padStart(2, "0")}:${String(state.deepWork.remainingSeconds % 60).padStart(2, "0")}`;
    els.deepWorkGoalDisplay.textContent = state.deepWork.goal || "Chọn mục tiêu và đốt thời gian thật nghiêm túc";
    els.deepWorkLevel.textContent = `Cấp độ ${state.deepWork.level}`;
    els.deepWorkXp.textContent = `XP: ${state.deepWork.xp}/${state.deepWork.level * 100}`;
    const progress = state.deepWork.totalSeconds > 0
        ? (state.deepWork.remainingSeconds / state.deepWork.totalSeconds) * 100
        : 100;
    els.deepWorkProgressBar.style.width = `${Math.max(0, Math.min(100, progress))}%`;
}

function stopAmbientSound() {
    if (!ambientAudio) return;
    ambientAudio.nodes?.forEach(node => {
        try {
            node.stop?.();
            node.disconnect?.();
        } catch {
            // noop
        }
    });
    ambientAudio.gains?.forEach(node => {
        try {
            node.disconnect?.();
        } catch {
            // noop
        }
    });
    ambientAudio.context?.close?.();
    ambientAudio = null;
}

function createNoiseBuffer(context) {
    const buffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) {
        data[i] = Math.random() * 2 - 1;
    }
    return buffer;
}

function startAmbientSound(type) {
    stopAmbientSound();
    const context = new (window.AudioContext || window.webkitAudioContext)();
    ambientAudio = { context, nodes: [], gains: [] };

    if (type === "rain") {
        const source = context.createBufferSource();
        const gain = context.createGain();
        const filter = context.createBiquadFilter();
        source.buffer = createNoiseBuffer(context);
        source.loop = true;
        filter.type = "lowpass";
        filter.frequency.value = 900;
        gain.gain.value = 0.028;
        source.connect(filter);
        filter.connect(gain);
        gain.connect(context.destination);
        source.start();
        ambientAudio.nodes.push(source, filter);
        ambientAudio.gains.push(gain);
        return;
    }

    const baseFrequencies = type === "space" ? [110, 164.81] : [220, 329.63];
    baseFrequencies.forEach((frequency, index) => {
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        oscillator.type = type === "space" ? "sine" : "triangle";
        oscillator.frequency.value = frequency;
        gain.gain.value = index === 0 ? 0.02 : 0.015;
        oscillator.connect(gain);
        gain.connect(context.destination);
        oscillator.start();
        ambientAudio.nodes.push(oscillator);
        ambientAudio.gains.push(gain);
    });
}

function addCoins(amount, reasonText) {
    state.currency.coins = Math.max(0, state.currency.coins + amount);
    save("timeCurrency", state.currency);
    updateCoinDisplay();
    els.coinSummary.textContent = reasonText;
}

function startDeepWork() {
    if (state.deepWork.running) return;
    state.deepWork.goal = els.deepWorkGoalInput.value.trim();
    state.deepWork.totalSeconds = Math.max(5, parseInt(els.deepWorkMinutesInput.value, 10) || 45) * 60;
    if (state.deepWork.remainingSeconds <= 0 || state.deepWork.remainingSeconds > state.deepWork.totalSeconds) {
        state.deepWork.remainingSeconds = state.deepWork.totalSeconds;
    }
    state.deepWork.ambient = els.deepWorkAmbientSelect.value;
    state.deepWork.running = true;
    els.deepWorkStartBtn.disabled = true;
    els.deepWorkPauseBtn.disabled = false;
    els.deepWorkHero.classList.add("burning");
    updateDeepWorkDisplay();
    startAmbientSound(state.deepWork.ambient);

    const endTime = Date.now() + state.deepWork.remainingSeconds * 1000;
    clearInterval(deepWorkInterval);
    deepWorkInterval = setInterval(() => {
        state.deepWork.remainingSeconds = Math.max(0, Math.round((endTime - Date.now()) / 1000));
        updateDeepWorkDisplay();
        if (state.deepWork.remainingSeconds <= 0) {
            completeDeepWork();
        }
    }, 250);
}

function pauseDeepWork() {
    state.deepWork.running = false;
    clearInterval(deepWorkInterval);
    stopAmbientSound();
    els.deepWorkStartBtn.disabled = false;
    els.deepWorkPauseBtn.disabled = true;
    els.deepWorkHero.classList.remove("burning");
}

function resetDeepWork() {
    pauseDeepWork();
    state.deepWork.totalSeconds = Math.max(5, parseInt(els.deepWorkMinutesInput.value, 10) || 45) * 60;
    state.deepWork.remainingSeconds = state.deepWork.totalSeconds;
    updateDeepWorkDisplay();
}

function completeDeepWork() {
    pauseDeepWork();
    state.deepWork.remainingSeconds = 0;
    state.deepWork.xp += 30;
    if (state.deepWork.xp >= state.deepWork.level * 100) {
        state.deepWork.xp -= state.deepWork.level * 100;
        state.deepWork.level += 1;
    }
    save("deepWorkState", state.deepWork);
    addCoins(12, "Bạn vừa hoàn thành một phiên tập trung sâu và nhận 12 xu.");
    updateDeepWorkDisplay();
    playDefaultBeep();
    alert("Hoàn thành phiên tập trung sâu. Bạn đã vào nhịp tốt hơn.");
}

function handleDeepWorkVisibility() {
    if (document.hidden && state.deepWork.running) {
        pauseDeepWork();
        resetDeepWork();
        els.deepWorkTabWarning.textContent = "Bạn vừa rời tab nên bộ đếm đã bị đặt lại 😈";
        addCoins(-4, "Rời tab khi đang tập trung sâu. Trừ 4 xu để nhắc bạn quay lại tập trung.");
    }
}

function getBirthdaySummary() {
    if (!state.birthday.birthDate) {
        return null;
    }

    const now = new Date();
    const birthDate = new Date(state.birthday.birthDate);
    const thisYearBirthday = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    let nextBirthday = new Date(thisYearBirthday);
    if (nextBirthday < new Date(now.getFullYear(), now.getMonth(), now.getDate())) {
        nextBirthday = new Date(now.getFullYear() + 1, birthDate.getMonth(), birthDate.getDate());
    }

    const isBirthdayToday = now.getMonth() === birthDate.getMonth() && now.getDate() === birthDate.getDate();
    const diffMs = nextBirthday - now;
    const diffDays = Math.ceil(diffMs / 86400000);
    const age = now.getFullYear() - birthDate.getFullYear() - (
        now < new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate()) ? 1 : 0
    );
    const livedDays = Math.floor((now - birthDate) / 86400000);

    return {
        now,
        birthDate,
        nextBirthday,
        isBirthdayToday,
        diffDays,
        age,
        livedDays
    };
}

function playBirthdayMelody() {
    const todayKey = new Date().toISOString().slice(0, 10);
    if (localStorage.getItem("birthdayTunePlayed") === todayKey) return;
    localStorage.setItem("birthdayTunePlayed", todayKey);

    const context = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [264, 264, 297, 264, 352, 330, 264, 264, 297, 264, 396, 352];
    notes.forEach((frequency, index) => {
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        oscillator.type = "triangle";
        oscillator.frequency.value = frequency;
        gain.gain.value = 0.0001;
        oscillator.connect(gain);
        gain.connect(context.destination);
        const start = context.currentTime + index * 0.32;
        gain.gain.linearRampToValueAtTime(0.18, start + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.3);
        oscillator.start(start);
        oscillator.stop(start + 0.31);
    });
}

function burstConfetti() {
    els.confettiLayer.innerHTML = "";
    const colors = ["#7dd3fc", "#f472b6", "#fbbf24", "#34d399", "#c084fc", "#fb7185"];
    for (let i = 0; i < 28; i += 1) {
        const piece = document.createElement("span");
        piece.className = "confetti-piece";
        piece.style.left = `${10 + Math.random() * 80}%`;
        piece.style.top = `${Math.random() * 20}%`;
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = `${Math.random() * 0.2}s`;
        els.confettiLayer.appendChild(piece);
    }
    setTimeout(() => {
        els.confettiLayer.innerHTML = "";
    }, 1400);
}

function cycleGiftWish() {
    const wish = GIFT_WISHES[state.birthday.giftIndex % GIFT_WISHES.length];
    state.birthday.giftIndex += 1;
    els.giftMessage.textContent = wish;
    burstConfetti();
    save("birthdayProfile", state.birthday);
}

function showFutureMessage() {
    const message = FUTURE_MESSAGES[state.birthday.futureIndex % FUTURE_MESSAGES.length];
    state.birthday.futureIndex += 1;
    els.futureLetter.textContent = message;
    save("birthdayProfile", state.birthday);
}

function updateBirthdayStats() {
    const summary = getBirthdaySummary();
    if (!summary) {
        els.birthdayHeadline.textContent = "Hôm nay là ngày đặc biệt của cậu…";
        els.birthdaySubline.textContent = "Thiết lập ngày sinh để website tự nhận ra và chuyển sang chế độ sinh nhật.";
        els.birthdayCountdownChip.textContent = "Còn -- ngày nữa đến sinh nhật của cậu ⏳";
        els.lifeAge.textContent = "--";
        els.lifeDays.textContent = "-- ngày";
        els.lifeSleep.textContent = "-- giờ";
        els.lifeGame.textContent = "-- giờ";
        els.lifeProgressBar.style.width = "0%";
        els.lifeProgressText.textContent = "Bạn đã sống được 0% cuộc đời";
        els.examCountdownText.textContent = "Countdown kỳ thi sẽ hiện ở đây.";
        els.celebrationBanner.classList.remove("show");
        els.birthdayHero.classList.remove("birthday-mode");
        return;
    }

    const { isBirthdayToday, diffDays, age, livedDays, now } = summary;
    const nameText = state.birthday.name ? ` ${state.birthday.name}` : "";

    if (isBirthdayToday) {
        els.birthdayHeadline.textContent = `Hôm nay là ngày đặc biệt của cậu${nameText}…`;
        els.birthdaySubline.textContent = "Màn hình đã chuyển sang chế độ chúc mừng. Hãy mở quà và đọc thư từ tương lai nhé.";
        els.celebrationBanner.classList.add("show");
        els.birthdayHero.classList.add("birthday-mode");
        playBirthdayMelody();
    } else {
        els.birthdayHeadline.textContent = `Chúc mừng trước sinh nhật của cậu${nameText}`;
        els.birthdaySubline.textContent = "Khi đến đúng ngày sinh, website sẽ tự chuyển sang chế độ ăn mừng cùng nhạc và hiệu ứng.";
        els.celebrationBanner.classList.remove("show");
        els.birthdayHero.classList.remove("birthday-mode");
    }

    els.birthdayCountdownChip.textContent = isBirthdayToday
        ? "Sinh nhật của cậu chính là hôm nay 🎂"
        : `Còn ${diffDays} ngày nữa đến sinh nhật của cậu ⏳`;

    els.lifeAge.textContent = `${age}`;
    els.lifeDays.textContent = `${livedDays.toLocaleString("vi-VN")} ngày`;
    els.lifeSleep.textContent = `${Math.round(livedDays * 8).toLocaleString("vi-VN")} giờ`;
    els.lifeGame.textContent = `${Math.round(livedDays * 1.8).toLocaleString("vi-VN")} giờ`;

    const lifeProgress = Math.min(100, (age / 80) * 100);
    els.lifeProgressBar.style.width = `${lifeProgress}%`;
    els.lifeProgressText.textContent = `Bạn đã sống được ${lifeProgress.toFixed(1)}% cuộc đời`;

    if (state.birthday.examDate) {
        const examDate = new Date(state.birthday.examDate);
        const diff = examDate - now;
        if (diff > 0) {
            els.examCountdownText.textContent = `Còn ${Math.ceil(diff / 86400000)} ngày nữa đến kỳ thi 🎯`;
        } else {
            els.examCountdownText.textContent = "Ngày thi đã tới hoặc đã qua. Tiếp tục phiên bản mạnh hơn của bạn nhé.";
        }
    } else {
        els.examCountdownText.textContent = "Hãy nhập ngày thi để hiển thị bộ đếm ngược riêng.";
    }
}

function saveBirthdayProfile() {
    state.birthday.name = els.profileName.value.trim();
    state.birthday.birthDate = els.birthDateInput.value;
    state.birthday.examDate = els.examDateInput.value;
    state.birthday.secretPassword = els.secretPasswordInput.value;
    save("birthdayProfile", state.birthday);
    updateBirthdayStats();
}

function unlockSecretPanel(method) {
    const validPassword = state.birthday.secretPassword && els.secretUnlockInput.value === state.birthday.secretPassword;
    if (method === "hold" || validPassword) {
        els.secretPanel.classList.add("show");
        els.secretGoalsInput.value = state.birthday.secretGoals || "";
        return;
    }

    alert("Mật khẩu chưa đúng hoặc bạn chưa thiết lập mật khẩu bí mật.");
}

function saveSecretGoals() {
    state.birthday.secretGoals = els.secretGoalsInput.value;
    save("birthdayProfile", state.birthday);
}

function updateTimeTravelUI() {
    state.travel.year = parseInt(els.timeTravelSlider.value, 10);
    els.timeTravelYear.textContent = `${state.travel.year}`;

    if (state.travel.year < 2010) {
        state.travel.mode = "past";
        els.timeTravelMode.textContent = "Quá khứ";
    } else if (state.travel.year > 2035) {
        state.travel.mode = "future";
        els.timeTravelMode.textContent = "Tương lai";
    } else {
        state.travel.mode = "present";
        els.timeTravelMode.textContent = "Hiện tại";
    }

    els.timeTravelDescription.textContent = TIME_TRAVEL_COPY[state.travel.mode];
}

function updateSimulationDisplay() {
    els.simClockDisplay.textContent = formatClockTime(
        state.travel.simulatedTime.getHours(),
        state.travel.simulatedTime.getMinutes(),
        state.travel.simulatedTime.getSeconds()
    );
}

function startSimulationClock() {
    clearInterval(simulationInterval);
    simulationInterval = setInterval(() => {
        const multiplier = Math.max(0.1, state.travel.speedPercent / 100);
        state.travel.simulatedTime = new Date(state.travel.simulatedTime.getTime() + 1000 * multiplier);
        updateSimulationDisplay();
    }, 250);
}

function updateSpeedController() {
    state.travel.speedPercent = parseInt(els.timeSpeedSlider.value, 10);
    els.timeSpeedLabel.textContent = `${state.travel.speedPercent}%`;
    const multiplier = (state.travel.speedPercent / 100).toFixed(2);
    els.timeSpeedDescription.textContent = `Thời gian mô phỏng đang chạy ở mức ${multiplier}x so với nhịp bình thường.`;
}

function saveMemory(imageData = "") {
    const title = els.memoryTitleInput.value.trim();
    const date = els.memoryDateInput.value;
    const note = els.memoryNoteInput.value.trim();

    if (!title || !date || !note) {
        alert("Hãy nhập đủ tiêu đề, ngày và ghi chú cho ký ức.");
        return;
    }

    state.memories.unshift({
        id: Date.now(),
        title,
        date,
        note,
        image: imageData
    });
    save("memories", state.memories);
    renderMemories();
    els.memoryTitleInput.value = "";
    els.memoryDateInput.value = "";
    els.memoryNoteInput.value = "";
    els.memoryImageInput.value = "";
}

function renderMemories() {
    els.memoryFeed.innerHTML = "";
    const today = new Date();
    const flashback = state.memories.find(memory => {
        const memoryDate = new Date(memory.date);
        return memoryDate.getMonth() === today.getMonth() && memoryDate.getDate() === today.getDate() && memoryDate.getFullYear() < today.getFullYear();
    });

    els.memoryFlashback.textContent = flashback
        ? `Ngày này năm trước: ${flashback.title} — ${flashback.note}`
        : "Chưa có ký ức nào trùng ngày hôm nay.";

    if (state.memories.length === 0) {
        els.memoryFeed.innerHTML = "<p class='small-note'>Chưa có ký ức nào được lưu.</p>";
        return;
    }

    state.memories.forEach(memory => {
        const card = document.createElement("article");
        card.className = "memory-card fade-memory";
        card.innerHTML = `
            <h4>${memory.title}</h4>
            <div class="memory-date">${new Date(memory.date).toLocaleDateString("vi-VN")}</div>
            ${memory.image ? `<img src="${memory.image}" alt="${memory.title}">` : ""}
            <p>${memory.note}</p>
        `;
        els.memoryFeed.appendChild(card);
    });
}

function saveDeadline() {
    state.deadline.title = els.deadlineTitleInput.value.trim();
    state.deadline.date = els.deadlineDateInput.value;
    state.deadline.createdAt = new Date().toISOString();
    save("deadlineState", state.deadline);
    updateDeadlineDisplay();
}

function updateDeadlineDisplay() {
    if (!state.deadline.title || !state.deadline.date) {
        els.deadlineTitleDisplay.textContent = "Chưa có deadline";
        els.deadlineCountdownDisplay.textContent = "-- ngày -- giờ -- phút";
        els.deadlineStatusDisplay.textContent = "Nhập deadline để kích hoạt chế độ căng thẳng dần.";
        els.deadlineProgressBar.style.width = "0%";
        els.deadlineMonitor.classList.remove("high", "critical");
        document.body.classList.remove("panic-active");
        document.body.style.setProperty("--panic", "0");
        return;
    }

    const deadlineTime = new Date(state.deadline.date).getTime();
    const createdAt = state.deadline.createdAt ? new Date(state.deadline.createdAt).getTime() : Date.now();
    const now = Date.now();
    const remaining = deadlineTime - now;
    const totalSpan = Math.max(1, deadlineTime - createdAt);
    const progress = Math.min(100, Math.max(0, (1 - remaining / totalSpan) * 100));

    els.deadlineTitleDisplay.textContent = state.deadline.title;
    els.deadlineCountdownDisplay.textContent = remaining > 0 ? formatDurationWords(remaining) : "Deadline đã tới!";
    els.deadlineProgressBar.style.width = `${progress}%`;

    const panic = Math.min(1, progress / 100);
    document.body.style.setProperty("--panic", panic.toFixed(2));

    if (remaining <= 0) {
        els.deadlineStatusDisplay.textContent = "Đã tới deadline. Không còn thời gian để trì hoãn.";
        els.deadlineMonitor.classList.add("critical");
        els.deadlineMonitor.classList.remove("high");
        document.body.classList.add("panic-active");
        return;
    }

    if (remaining < 6 * 60 * 60 * 1000) {
        els.deadlineStatusDisplay.textContent = "Cực gấp. Giao diện đang siết mức hoảng deadline tối đa.";
        els.deadlineMonitor.classList.add("critical");
        els.deadlineMonitor.classList.remove("high");
        document.body.classList.add("panic-active");
    } else if (remaining < 24 * 60 * 60 * 1000) {
        els.deadlineStatusDisplay.textContent = "Đã vào vùng đỏ. Cần hành động ngay trong hôm nay.";
        els.deadlineMonitor.classList.add("high");
        els.deadlineMonitor.classList.remove("critical");
        document.body.classList.add("panic-active");
    } else {
        els.deadlineStatusDisplay.textContent = "Deadline đang tiến gần. Vẫn còn thời gian nếu bạn bắt đầu ngay.";
        els.deadlineMonitor.classList.remove("critical");
        els.deadlineMonitor.classList.remove("high");
        document.body.classList.remove("panic-active");
    }
}

function renderShop() {
    Array.from(els.shopGrid.querySelectorAll(".shop-card")).forEach(card => {
        const item = card.dataset.item;
        card.classList.toggle("owned", state.currency.inventory.includes(item));
    });
}

function buyShopItem(itemId) {
    const item = SHOP_ITEMS[itemId];
    if (!item) return;
    if (state.currency.inventory.includes(itemId)) {
        els.shopStatusText.textContent = `Bạn đã sở hữu ${item.name}.`;
        return;
    }
    if (state.currency.coins < item.cost) {
        els.shopStatusText.textContent = `Không đủ xu để mua ${item.name}.`;
        return;
    }
    state.currency.coins -= item.cost;
    state.currency.inventory.push(itemId);
    save("timeCurrency", state.currency);
    updateCoinDisplay();
    renderShop();
    els.shopStatusText.textContent = `Bạn vừa mua ${item.name}.`;
}

function saveWorldClocks() {
    save("clockWorldClocks", state.worldClocks);
}

function renderWorldClocks() {
    els.timezonesGrid.innerHTML = "";
    if (state.worldClocks.length === 0) {
        els.timezonesGrid.innerHTML = "<div class='card'><p class='small-note'>Chưa có múi giờ nào được thêm.</p></div>";
        return;
    }

    state.worldClocks.forEach(timezone => {
        const card = document.createElement("div");
        card.className = "timezone-card";
        const name = timezone === "UTC" ? "UTC" : timezone.split("/").pop().replace(/_/g, " ");
        card.innerHTML = `
            <h4>${name}</h4>
            <div class="timezone-time" data-timezone="${timezone}">--:--:--</div>
            <div class="timezone-offset"></div>
            <button class="timezone-remove">
                <i class="fas fa-times"></i>
            </button>
        `;
        card.querySelector(".timezone-remove").addEventListener("click", () => {
            state.worldClocks = state.worldClocks.filter(entry => entry !== timezone);
            saveWorldClocks();
            renderWorldClocks();
        });
        els.timezonesGrid.appendChild(card);
    });
    updateWorldClocks();
}

function addWorldClock() {
    const timezone = els.timezoneSelect.value;
    if (state.worldClocks.includes(timezone)) {
        alert("Múi giờ này đã tồn tại");
        return;
    }
    state.worldClocks.push(timezone);
    saveWorldClocks();
    renderWorldClocks();
}

function updateWorldClocks() {
    state.worldClocks.forEach(timezone => {
        const node = document.querySelector(`[data-timezone="${timezone}"]`);
        if (!node) return;
        try {
            const now = new Date();
            node.textContent = new Intl.DateTimeFormat("en-GB", {
                timeZone: timezone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false
            }).format(now);
            const localTime = new Date(now.toLocaleString("en-US", { timeZone: timezone }));
            const utcDiffHours = (localTime - now) / 3600000;
            const hours = Math.trunc(utcDiffHours);
            const minutes = Math.round(Math.abs(utcDiffHours - hours) * 60);
            const sign = utcDiffHours >= 0 ? "+" : "-";
            node.parentElement.querySelector(".timezone-offset").textContent =
                `UTC${sign}${String(Math.abs(hours)).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
        } catch {
            node.textContent = "--:--:--";
        }
    });
}

function requestNotificationPermission() {
    if ("Notification" in window && Notification.permission === "default") {
        Notification.requestPermission();
    }
}

function restorePreferences() {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
    updateThemeButton();

    state.currentTheme = localStorage.getItem("clockTheme") || "modern";
    applyClockTheme(state.currentTheme);

    state.backgroundTheme = localStorage.getItem("backgroundTheme") || "chill";
    applyBackgroundTheme(state.backgroundTheme);

    state.timeFormat = localStorage.getItem("timeFormat") || "24h";
    els.timeFormatSelect.value = state.timeFormat;

    state.stopwatch.history = load("stopwatchHistory", []);
    state.alarms = load("clockAlarms", []).map(alarm => ({ ...alarm, triggered: false }));
    state.worldClocks = load("clockWorldClocks", []);
    state.memories = load("memories", []);
    state.deadline = load("deadlineState", state.deadline);
    state.currency = load("timeCurrency", state.currency);
    state.deepWork = { ...state.deepWork, ...load("deepWorkState", state.deepWork), running: false, remainingSeconds: Math.max(1, load("deepWorkState", state.deepWork).remainingSeconds || state.deepWork.totalSeconds) };
    state.birthday = { ...state.birthday, ...load("birthdayProfile", state.birthday) };
    state.travel = { ...state.travel, speedPercent: 60, simulatedTime: new Date() };

    state.ringtone.fileName = localStorage.getItem("ringtoneFileName") || "";
    updateRingtoneLabel();

    els.profileName.value = state.birthday.name || "";
    els.birthDateInput.value = state.birthday.birthDate || "";
    els.examDateInput.value = state.birthday.examDate || "";
    els.secretPasswordInput.value = state.birthday.secretPassword || "";
    els.secretGoalsInput.value = state.birthday.secretGoals || "";

    els.deepWorkGoalInput.value = state.deepWork.goal || "";
    els.deepWorkMinutesInput.value = Math.max(5, Math.round(state.deepWork.totalSeconds / 60) || 45);
    els.deepWorkAmbientSelect.value = state.deepWork.ambient || "lofi";

    els.deadlineTitleInput.value = state.deadline.title || "";
    els.deadlineDateInput.value = state.deadline.date || "";

    renderAlarms();
    renderWorldClocks();
    renderMemories();
    renderShop();
    updateCoinDisplay();
    updateStopwatchDisplay();
    updateTimerInputPreview();
    setPomodoroPhase("focus");
    updateBirthdayStats();
    updateDeepWorkDisplay();
    updateTimeTravelUI();
    updateSpeedController();
    updateSimulationDisplay();
    updateDeadlineDisplay();

    if (state.worldClocks.length === 0) {
        state.worldClocks = ["Asia/Ho_Chi_Minh"];
        saveWorldClocks();
        renderWorldClocks();
    }
}

function bindEvents() {
    els.themeBtn.addEventListener("click", toggleTheme);
    els.fullscreenBtn.addEventListener("click", toggleFullscreen);
    els.helpBtn.addEventListener("click", () => els.helpModal.classList.add("show"));
    els.closeBtn.addEventListener("click", () => els.helpModal.classList.remove("show"));
    window.addEventListener("click", event => {
        if (event.target === els.helpModal) {
            els.helpModal.classList.remove("show");
        }
    });

    els.copyTimeBtn.addEventListener("click", event => copyTime(event.currentTarget));
    els.navButtons.forEach(button => {
        button.addEventListener("click", event => switchTab(button.dataset.tab, event.currentTarget));
    });
    els.themeOptions.forEach(option => {
        option.addEventListener("click", () => applyClockTheme(option.dataset.theme));
    });
    els.backgroundThemeOptions.forEach(option => {
        option.addEventListener("click", () => applyBackgroundTheme(option.dataset.backgroundTheme));
    });

    els.startBtn.addEventListener("click", startStopwatch);
    els.pauseBtn.addEventListener("click", pauseStopwatch);
    els.resetBtn.addEventListener("click", resetStopwatch);
    els.lapBtn.addEventListener("click", recordLap);
    els.historyBtn.addEventListener("click", showStopwatchHistory);

    [els.timerHours, els.timerMinutes, els.timerSeconds].forEach(input => {
        input.addEventListener("input", updateTimerInputPreview);
    });
    els.timerStartBtn.addEventListener("click", startTimer);
    els.timerPauseBtn.addEventListener("click", pauseTimer);
    els.timerResetBtn.addEventListener("click", resetTimer);

    els.addAlarmBtn.addEventListener("click", addAlarm);
    els.alarmTime.addEventListener("keypress", event => {
        if (event.key === "Enter") addAlarm();
    });
    els.exportAlarmsBtn.addEventListener("click", exportAlarms);
    els.importAlarmsInput.addEventListener("change", event => {
        if (event.target.files[0]) {
            importAlarms(event.target.files[0]);
            event.target.value = "";
        }
    });
    els.ringtoneInput.addEventListener("change", event => {
        if (event.target.files[0]) {
            setCustomRingtone(event.target.files[0]);
            event.target.value = "";
        }
    });
    els.testRingtoneBtn.addEventListener("click", () => playAlarmSound(false));
    els.stopRingtoneBtn.addEventListener("click", stopAlarmSound);

    els.pomodoroTask.addEventListener("input", updatePomodoroDisplay);
    [els.pomodoroFocusMinutes, els.pomodoroShortBreak, els.pomodoroLongBreak].forEach(input => {
        input.addEventListener("input", () => {
            if (!state.pomodoro.running) setPomodoroPhase(state.pomodoro.phase);
        });
    });
    els.pomodoroStartBtn.addEventListener("click", startPomodoro);
    els.pomodoroPauseBtn.addEventListener("click", pausePomodoro);
    els.pomodoroSkipBtn.addEventListener("click", skipPomodoroPhase);
    els.pomodoroResetBtn.addEventListener("click", resetPomodoro);

    els.saveProfileBtn.addEventListener("click", saveBirthdayProfile);
    els.futureMessageBtn.addEventListener("click", showFutureMessage);
    els.giftBoxBtn.addEventListener("click", cycleGiftWish);
    els.secretUnlockBtn.addEventListener("click", () => unlockSecretPanel("password"));
    els.saveSecretGoalsBtn.addEventListener("click", saveSecretGoals);
    els.secretHoldBtn.addEventListener("mousedown", () => {
        holdTimeoutId = setTimeout(() => unlockSecretPanel("hold"), 5000);
    });
    ["mouseup", "mouseleave", "touchend", "touchcancel"].forEach(eventName => {
        els.secretHoldBtn.addEventListener(eventName, () => clearTimeout(holdTimeoutId));
    });

    els.deepWorkGoalInput.addEventListener("input", () => {
        state.deepWork.goal = els.deepWorkGoalInput.value.trim();
        updateDeepWorkDisplay();
    });
    els.deepWorkMinutesInput.addEventListener("input", resetDeepWork);
    els.deepWorkAmbientSelect.addEventListener("change", () => {
        state.deepWork.ambient = els.deepWorkAmbientSelect.value;
    });
    els.deepWorkStartBtn.addEventListener("click", startDeepWork);
    els.deepWorkPauseBtn.addEventListener("click", pauseDeepWork);
    els.deepWorkResetBtn.addEventListener("click", resetDeepWork);

    els.timeTravelSlider.addEventListener("input", updateTimeTravelUI);
    els.timeSpeedSlider.addEventListener("input", updateSpeedController);

    els.saveMemoryBtn.addEventListener("click", () => {
        const file = els.memoryImageInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = event => saveMemory(event.target.result);
            reader.readAsDataURL(file);
        } else {
            saveMemory("");
        }
    });

    els.saveDeadlineBtn.addEventListener("click", saveDeadline);
    els.earnCoinBtn.addEventListener("click", () => addCoins(24, "Một giờ làm việc hiệu quả đã mang về 24 xu."));
    els.wasteCoinBtn.addEventListener("click", () => addCoins(-12, "Một giờ lãng phí đã làm bạn mất 12 xu."));
    els.shopGrid.addEventListener("click", event => {
        const card = event.target.closest(".shop-card");
        if (!card) return;
        buyShopItem(card.dataset.item);
    });

    els.addTimezoneBtn.addEventListener("click", addWorldClock);
    els.timeFormatSelect.addEventListener("change", event => {
        state.timeFormat = event.target.value;
        localStorage.setItem("timeFormat", state.timeFormat);
        updateDigitalClock();
    });
    els.darkModeToggle.addEventListener("click", toggleTheme);
    els.clearHistoryBtn.addEventListener("click", clearStopwatchHistory);
    els.clearAllBtn.addEventListener("click", () => {
        if (!confirm("Bạn chắc chắn muốn xóa tất cả dữ liệu?")) return;
        localStorage.clear();
        stopAlarmSound();
        stopAmbientSound();
        location.reload();
    });

    document.addEventListener("visibilitychange", handleDeepWorkVisibility);
    window.addEventListener("resize", syncAnalogCanvas);
    window.addEventListener("beforeunload", () => {
        if (state.ringtone.url) URL.revokeObjectURL(state.ringtone.url);
        stopAmbientSound();
    });

    document.addEventListener("keydown", event => {
        const activeTag = document.activeElement?.tagName;
        if (activeTag === "INPUT" || activeTag === "TEXTAREA" || activeTag === "SELECT") return;

        const stopwatchTab = document.getElementById("stopwatch").classList.contains("active");
        const timerTab = document.getElementById("timer").classList.contains("active");
        if (stopwatchTab) {
            if (event.code === "Space") {
                event.preventDefault();
                state.stopwatch.running ? pauseStopwatch() : startStopwatch();
            }
            if (event.ctrlKey && event.code === "KeyR") {
                event.preventDefault();
                resetStopwatch();
            }
            if (event.code === "KeyL") {
                event.preventDefault();
                recordLap();
            }
        }

        if (timerTab) {
            if (event.code === "Space") {
                event.preventDefault();
                state.timer.running ? pauseTimer() : startTimer();
            }
            if (event.ctrlKey && event.code === "KeyR") {
                event.preventDefault();
                resetTimer();
            }
        }
    });
}

function startIntervals() {
    clearInterval(alarmInterval);
    clearInterval(worldClockInterval);
    clearInterval(birthdayInterval);
    clearInterval(deadlineInterval);
    clearInterval(simulationInterval);

    alarmInterval = setInterval(checkAlarms, 1000);
    worldClockInterval = setInterval(updateWorldClocks, 1000);
    birthdayInterval = setInterval(updateBirthdayStats, 60000);
    deadlineInterval = setInterval(updateDeadlineDisplay, 1000);
    startSimulationClock();
}

function init() {
    requestNotificationPermission();
    restorePreferences();
    bindEvents();
    drawAnalogClock();
    updateDigitalClock();
    startIntervals();
}

document.addEventListener("DOMContentLoaded", init);
