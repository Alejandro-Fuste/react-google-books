import { useEffect, useState } from 'react';

const useDebounce = (value, delay) => {
	const [ debouncedValue, setDebounceValue ] = useState(value);

	return debouncedValue;
};

export default useDebounce;
