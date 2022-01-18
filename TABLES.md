<div style="display: none;"><link href="https://cdn.razorcss.xyz/css/razor-css-1.1.min.css" rel="stylesheet">
<script src="https://cdn.razorcss.xyz/js/bundle.min.js"></script>
<link href="https://cdn.razorcss.xyz/icons/style.css" rel="stylesheet"></div>

# Tables

# Overview

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Col 1</td>
      <td>Col 2</td>
      <td>Col 3</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Col 1</td>
      <td>Col 2</td>
      <td>Col 3</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Col 1</td>
      <td>Col 3</td>
    </tr>
  </tbody>
</table>

```
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Second</th>
      <th scope="col">Third</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Col 1</td>
      <td>Col 2</td>
      <td>Col 3</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Col 1</td>
      <td>Col 2</td>
      <td>Col 3</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Col 1</td>
      <td>Col 3</td>
    </tr>
  </tbody>
</table>
```

# Variants

<table class="table">
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Default</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
        <tr class="table-primary">
          <th scope="row">Primary</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr class="table-secondary">
          <th scope="row">Secondary</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr class="table-success">
          <th scope="row">Success</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr class="table-danger">
          <th scope="row">Danger</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr class="table-warning">
          <th scope="row">Warning</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr class="table-info">
          <th scope="row">Info</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr class="table-light">
          <th scope="row">Light</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr class="table-dark">
          <th scope="row">Dark</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
    </tbody>
  </table>

```
<!-- On tables -->
<table class="table-primary">...</table>
<table class="table-secondary">...</table>
<table class="table-success">...</table>
<table class="table-danger">...</table>
<table class="table-warning">...</table>
<table class="table-info">...</table>
<table class="table-light">...</table>
<table class="table-dark">...</table>

<!-- On rows -->
<tr class="table-primary">...</tr>
<tr class="table-secondary">...</tr>
<tr class="table-success">...</tr>
<tr class="table-danger">...</tr>
<tr class="table-warning">...</tr>
<tr class="table-info">...</tr>
<tr class="table-light">...</tr>
<tr class="table-dark">...</tr>

<!-- On cells (`td` or `th`) -->
<tr>
  <td class="table-primary">...</td>
  <td class="table-secondary">...</td>
  <td class="table-success">...</td>
  <td class="table-danger">...</td>
  <td class="table-warning">...</td>
  <td class="table-info">...</td>
  <td class="table-light">...</td>
  <td class="table-dark">...</td>
</tr>
```

# Accented tables

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Second</th>
      <th scope="col">Third</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Col 1</td>
      <td>Col 2</td>
      <td>Col 3</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Col 1</td>
      <td>Col 2</td>
      <td>Col 3</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Col 1</td>
      <td>Col 3</td>
    </tr>
  </tbody>
</table>

```
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Second</th>
      <th scope="col">Third</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Col 1</td>
      <td>Col 2</td>
      <td>Col 3</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Col 1</td>
      <td>Col 2</td>
      <td>Col 3</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Col 1</td>
      <td>Col 3</td>
    </tr>
  </tbody>
</table>
```

<table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Second</th>
      <th scope="col">Third</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Col 1</td>
      <td>Col 2</td>
      <td>Col 3</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Col 1</td>
      <td>Col 2</td>
      <td>Col 3</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Col 1</td>
      <td>Col 3</td>
    </tr>
  </tbody>
</table>
This can also be used with the dark versions and colored versions

```
<table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Second</th>
      <th scope="col">Third</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Col 1</td>
      <td>Col 2</td>
      <td>Col 3</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Col 1</td>
      <td>Col 2</td>
      <td>Col 3</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Col 1</td>
      <td>Col 3</td>
    </tr>
  </tbody>
</table>
```

<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="/LISTS.md">Previous</a></li>
    <li class="page-item"><a class="page-link" href="/FORMS.md">Next</a></li>
  </ul>
</nav>