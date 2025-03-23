// Переключение между разделами
document.querySelectorAll('.sidebar li').forEach(item => {
    item.addEventListener('click', () => {
        // Убираем активный класс у всех разделов
        document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

        // Добавляем активный класс выбранному разделу
        item.classList.add('active');
        document.getElementById(item.getAttribute('data-tab')).classList.add('active');
    });
});

// Файловые утилиты
function renameFiles() {
    const pattern = document.getElementById('rename-pattern').value;
    alert(`Файлы будут переименованы по шаблону: ${pattern}`);
}

function findDuplicates() {
    alert('Поиск дубликатов...');
    document.getElementById('duplicates-result').innerText = 'Дубликаты найдены: file1.txt, file2.txt';
}

function changeExtensions() {
    const newExtension = document.getElementById('new-extension').value;
    alert(`Расширения будут изменены на: ${newExtension}`);
}

function deleteEmptyFolders() {
    alert('Пустые папки удалены.');
}

function createBackup() {
    alert('Резервная копия создана.');
}

function mergeFiles() {
    alert('Файлы объединены.');
}

function splitFile() {
    alert('Файл разделен.');
}

function searchFiles() {
    alert('Поиск файлов завершен.');
}

function generateDirectoryTree() {
    alert('Дерево каталогов сгенерировано.');
}

function sortFilesByDate() {
    alert('Файлы отсортированы по дате.');
}

function archiveFiles() {
    alert('Файлы архивированы.');
}

function extractArchive() {
    alert('Архив извлечен.');
}

function searchFilesBySize() {
    alert('Файлы найдены по размеру.');
}

function searchFilesByType() {
    alert('Файлы найдены по типу.');
}
