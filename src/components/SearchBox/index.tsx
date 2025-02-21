import { FC } from 'react';
import { ReactComponent as CancelIcon } from '../../assets/images/cancel.svg';
import { ReactComponent as SearchIcon } from '../../assets/images/search.svg';
import './index.scss';

interface ISearchBox {
  handleEnter?: (e: React.KeyboardEvent) => void;
  handleFilter?: (value: string) => void;
  results?: number;
  value?: string;
}

const SearchBox: FC<ISearchBox> = ({ value, results = 0, handleEnter, handleFilter }) => {
  return (
    <div className="searchbox">
      <SearchIcon className="search-icon" />
      <input
        title="Search"
        type="text"
        value={value}
        onChange={(e) => handleFilter && handleFilter(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === 'Enter') e.preventDefault();
          if (handleEnter) handleEnter(e);
        }}
      />
      {value !== '' && (
        <button className="reset-btn" onClick={() => handleFilter && handleFilter('')}>
          <CancelIcon />
        </button>
      )}
      {results > 0 && <p className="results">{results} Results</p>}
    </div>
  );
};

export default SearchBox;
