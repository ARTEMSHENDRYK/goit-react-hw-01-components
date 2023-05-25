import PropTypes from "prop-types";

function Statistics({ title, stats }) {  
  return (
    <section class="statistics">
      {<h2 class="title">{title}</h2> && title}
      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li class="item" key={id}>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}%</span>
          </li>    
        ))}        
      </ul>
    </section>    
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percantage: PropTypes.number,
    })
  ).isRequired
}

export default Statistics;