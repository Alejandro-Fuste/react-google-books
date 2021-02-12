import { useEffect, useState } from 'react';

const useDebounce = (value, delay) => {
	const [ debouncedValue, setDebounceValue ] = useState(value);

	useEffect(() => {}, [ value, delay ]);

	return debouncedValue;
};

export default useDebounce;
