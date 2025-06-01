import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'; // Import Link

const FruitDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [fruit, setFruit] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!router.isReady || !id) {
      return;
    }

    setIsLoading(true);
    setError(null);

    fetch(`/api/fruits?id=${id}`)
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          setFruit(data.fruit);
        } else if (res.status === 404) {
          setError('Fruit not found');
        } else {
          const errorData = await res.json();
          setError(errorData.message || 'Error fetching fruit data.');
        }
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError('An unexpected error occurred. Please try again later.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [router.isReady, id]);

  const pageTitle = fruit ? `Fruit Details - ${fruit.name}` : 'Fruit Details';

  // Styles object
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '2rem',
      maxWidth: '800px',
      margin: '2rem auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    },
    pageTitle: {
      textAlign: 'center',
      color: '#2c3e50',
      fontSize: '2.5rem',
      marginBottom: '1.5rem',
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      margin: '2rem 0',
    },
    image: {
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    },
    benefitsHeading: {
      color: '#34495e',
      borderBottom: '2px solid #e0e0e0',
      paddingBottom: '0.5rem',
      marginTop: '2rem',
      fontSize: '1.8rem',
      marginBottom: '1rem',
    },
    benefitsList: {
      listStyleType: 'none', // Remove default bullets
      paddingLeft: '0',
    },
    benefitItem: {
      backgroundColor: '#ffffff',
      border: '1px solid #ecf0f1',
      borderRadius: '4px',
      padding: '0.75rem 1rem',
      marginBottom: '0.5rem',
      fontSize: '1.1rem',
      color: '#34495e',
      boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
    },
    messageText: {
      textAlign: 'center',
      fontSize: '1.2em',
      padding: '2rem',
      color: '#555',
    },
    errorMessageText: {
      textAlign: 'center',
      fontSize: '1.2em',
      padding: '2rem',
      color: 'red',
    },
    goBackLink: {
      display: 'inline-block',
      marginBottom: '1.5rem',
      color: '#007bff',
      textDecoration: 'none',
      fontSize: '1rem',
    },
    fruitDescription: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      color: '#333',
      textAlign: 'justify',
      marginTop: '1.5rem',
      marginBottom: '1.5rem',
      padding: '0 1rem', // Add some horizontal padding if text is long
    }
  };

  return (
    <div style={styles.container}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={fruit ? `Details about ${fruit.name}` : 'Fruit detail page'} />
      </Head>

      <Link href="/" style={styles.goBackLink}>
        ← Go Back
      </Link>

      {isLoading && <p style={styles.messageText}>Loading...</p>}

      {error && <p style={styles.errorMessageText}>Error: {error}</p>}

      {!isLoading && !error && !fruit && (
        <p style={styles.messageText}>Fruit not found.</p>
      )}

      {fruit && !isLoading && !error && (
        <>
          <h1 style={styles.pageTitle}>{fruit.name}</h1>
          <div style={styles.imageContainer}>
            <Image
              src={fruit.imageUrl || '/images/placeholder.png'}
              alt={fruit.name}
              width={300} // Increased image size
              height={300} // Increased image size
              style={styles.image}
            />
          </div>

          {fruit.description && (
            <p style={styles.fruitDescription}>{fruit.description}</p>
          )}

          <h2 style={styles.benefitsHeading}>Benefits:</h2>
          <ul style={styles.benefitsList}>
            {fruit.benefits.map((benefit, index) => (
              <li key={index} style={styles.benefitItem}>
                {benefit.charAt(0).toUpperCase() + benefit.slice(1)}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default FruitDetailPage;
