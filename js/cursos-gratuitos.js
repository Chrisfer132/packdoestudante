// script.js

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const categoryFilter = document.getElementById('category');
    const durationFilter = document.getElementById('duration');
    const courseList = document.getElementById('course-list');
    const courses = courseList.getElementsByClassName('course-item');

    function filterCourses() {
        const searchQuery = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value.toLowerCase();
        const selectedDuration = durationFilter.value.toLowerCase();

        for (let course of courses) {
            const courseTitle = course.querySelector('h2').textContent.toLowerCase();
            const courseCategory = course.getAttribute('data-category').toLowerCase();
            const courseDuration = course.getAttribute('data-duration').toLowerCase();

            const matchesSearch = courseTitle.includes(searchQuery);
            const matchesCategory = selectedCategory === '' || courseCategory === selectedCategory;
            const matchesDuration = selectedDuration === '' || courseDuration === selectedDuration;

            if (matchesSearch && matchesCategory && matchesDuration) {
                course.style.display = '';
            } else {
                course.style.display = 'none';
            }
        }
    }

    searchInput.addEventListener('input', filterCourses);
    categoryFilter.addEventListener('change', filterCourses);
    durationFilter.addEventListener('change', filterCourses);
});
