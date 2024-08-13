import { Button, Text } from '@/shared';
import { useNavigate } from 'react-router-dom';
import { PublicationsDto } from '@/pages/publicationsPage/constants';
import styles from './PublicationsAdmin.module.scss';
import { useState } from 'react';

const PublicationsAdmin = () => {
  const [value, setValue] = useState<string>('');
  const navigate = useNavigate();

  return (
    <div className={styles['wrapper']}>
      <header className={styles['wrapper__header']}>
        <input
          placeholder='Search article...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button size='m' width='content' href='/admin/publications/createPublication'>
          {'Создать публикацию'}
        </Button>
      </header>
      <main className={styles['wrapper__publications']}>
        {PublicationsDto.map((block) => (
          <>
            {block.publications.some((publication) =>
              publication.name.toUpperCase().includes(value.toUpperCase()),
            ) && (
              <div className={styles['wrapper__block']}>
                <Text tag='h3' weight='semibold'>
                  {block.year}
                </Text>

                {block.publications
                  .filter((publication) =>
                    publication.name.toUpperCase().includes(value.toUpperCase()),
                  )
                  .map((publication) => (
                    <div
                      onClick={() =>
                        navigate(`/admin/publications/editPublication/${publication.id}`, {
                          state: { ...publication, year: block.year },
                        })
                      }
                    >
                      <Text tag='p' weight='medium'>
                        {publication.name.toUpperCase()}
                      </Text>
                    </div>
                  ))}
              </div>
            )}
          </>
        ))}
      </main>
    </div>
  );
};

export default PublicationsAdmin;
