# Responsive-Table
Responsive table for websites written in JavaScript and css. For wider screens all the columns in the table will appear. When the screen is narrower only the title column appears and there is a button that can be pressed to open the table row where the other columns are displayed under the title column.
For an example open the Example.html file.
The Responsive Table also supports RTL (right-to-left) languages such as Hebrew and Arabic.

##Usage:

**'respomsive-table'** - Class to be added to '<table>' tag.

**'respomsive-row'** - Class to be added each '<tr>' tag.

Each '<td>' tag should have the following format:
'''
 				<div class="column-content">
					<span class="column-title">Column Title</span><br/>
					<span class="column-data">Column Data</span>
				</div>
'''
