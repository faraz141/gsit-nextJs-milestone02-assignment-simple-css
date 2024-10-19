import React from 'react';
import styles from './Companies.module.css';

const companies = [
  {
    name: 'Company Name 8',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Company Name 8',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Company Name 8',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Company Name 8',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Company Name 8',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Company Name 8',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Company Name 8',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Company Name 8',
    location: 'City, Country',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const CompaniesGrid: React.FC = () => {
  return (
    <div>
      <h1 className={styles.heading}>COMPANIES</h1>
      <main className={styles.grid}>
        {companies.map((company, index) => (
          <section className={styles.content} key={index}>
            <div className={styles.companyListing}>
              <h3>{company.name}</h3>
              <p>Location: {company.location}</p>
              <p>Description: {company.description}</p>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default CompaniesGrid;
