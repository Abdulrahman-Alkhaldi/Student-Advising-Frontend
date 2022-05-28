import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const SearchBox = () => {

const filterOptions = createFilterOptions({
	matchFrom: 'start',
	stringify: option => option,
});

// Sample options for search box
const myOptions = ['Taleb', 'abdulrahman', 'cyberistic',
	'Aziz', 'Omar', 'Dhari',
	'hello world', 'Welcome'];

return (
	<div style={{ marginLeft: '40%', marginTop: '60px' }}>
	<h3>Search for a student</h3>
	<Autocomplete
		style={{ width: 500 }}
		freeSolo
		filterOptions={filterOptions}
		options={myOptions}
		renderInput={(params) => (
		<TextField {...params}
			variant="outlined"
			label="Search Box"
		/>
		)}
	/>
	</div>
);
}

export default SearchBox
