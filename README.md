# Responsive-Table

Responsive table for websites written in JavaScript and css. For wider screens all the columns in the table will appear. When the screen is narrower only the title column appears and there is a button that can be pressed to open the table row where the other columns are displayed under the title column.

For an example open the Example.html file.

The Responsive Table also supports RTL (right-to-left) languages such as Hebrew and Arabic.

## Usage:

**`responsive-table`** - Class to be added to `<table>` tag.

**`responsive-row`** - Class to be added each `<tr>` tag.

The first column needs to have the following format:
```
<td>
	<div class="column-content">
		<span class="row-title">Row Title</span><br/>
		<span class="row-name">Row Name</span>
	</div>
	<div class="toggle-button"><i class="fas fa-angle-down"></i>
</td>
```

The **`toggle-button`** class defines the button that will open the row when it is closed. The example uses icons from [Font Awesome](https://fontawesome.com/).


Each additional `<td>` tag should have the following format:
```
<td>
	<div class="column-content">
		<span class="column-title">Column Title</span><br/>
		<span class="column-data">Column Data</span>
	</div>
</td>
```

