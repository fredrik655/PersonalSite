import {parseDate, sortData, parseAllDate, parseRawData} from '../components/GitProjectServices';
import {dataType} from '../components/types';

describe('git projects services', () => {

  test('transform date to right format', () => {
    const data = [
      {
        name: 'battleship',
        description: '--- The Odin Project --- assignment Battleship',
        created_at: '2021-01-03T08:00:56Z',
        updated_at: '2021-01-11T16:38:43Z',
        html_url: 'https://github.com/fredrik655/battleship'
      },
      {
        name: 'test',
        description: '--- The Odin Project --- assignment Battleship',
        created_at: 'test',
        updated_at: '2021-01-11T16:38:43Z',
        html_url: 'https://github.com/fredrik655/battleship'
      },
    ];

    const parsedData = parseRawData(data);
    expect(parsedData[0]).toEqual({
      repoName: 'battleship',
      description: '--- The Odin Project --- assignment Battleship',
      created: '2021-01-03T08:00:56Z',
      lastUpdated: '2021-01-11T16:38:43Z',
      githubLink: 'https://github.com/fredrik655/battleship'
    });
    expect(parsedData[1]).toEqual({
      repoName: 'test',
      description: '--- The Odin Project --- assignment Battleship',
      created: 'test',
      lastUpdated: '2021-01-11T16:38:43Z',
      githubLink: 'https://github.com/fredrik655/battleship'
    });

  })

  test('transform date to right format', () => {
    const date = '2021-03-13T10:10:10Z';

    expect(parseDate(date)).toEqual('2021-03-13');
  })

  test('transform date to right format for whole dataset', () => {
    const data:dataType[] = [
      {
        repoName: 'b',
        description: 'test text',
        created: '2021-03-01T10:10:10Z',
        lastUpdated: '2020-03-25T10:10:10Z'
      },
      {
        repoName: 'a',
        description: 'test',
        created: '2021-03-13T10:10:10Z',
        lastUpdated: '2021-03-14T10:10:10Z'
      },
    ];

    const parsedData = parseAllDate(data);

    expect(parsedData[0]).toEqual({
      repoName: 'b',
      description: 'test text',
      created: '2021-03-01',
      lastUpdated: '2020-03-25'
    });

    expect(parsedData[1]).toEqual({
      repoName: 'a',
      description: 'test',
      created: '2021-03-13',
      lastUpdated: '2021-03-14'
    });
  })

  test('sort based on date and repo name', () => {
    const data:dataType[] = [
      {
        repoName: 'b',
        description: 'test text',
        created: '2021-03-01',
        lastUpdated: '2020-03-25'
      },
      {
        repoName: 'a',
        description: 'test',
        created: '2021-03-13',
        lastUpdated: '2021-03-14'
      },
    ];

    const sortedByName:dataType[] = sortData(data, 'name');
    expect(sortedByName[0].repoName).toEqual('a');
    expect(sortedByName[1].repoName).toEqual('b');

    const sortedByNameReverse:dataType[] = sortData(data, 'name-reverse');
    expect(sortedByNameReverse[0].repoName).toEqual('b');
    expect(sortedByNameReverse[1].repoName).toEqual('a');

    const sortedByCreateDate:dataType[] = sortData(data, 'create-date-oldest');
    expect(sortedByCreateDate[0].created).toEqual('2021-03-01');
    expect(sortedByCreateDate[1].created).toEqual('2021-03-13');

    const sortedByCreateDateReverse:dataType[] = sortData(data, 'create-date-newest');
    expect(sortedByCreateDateReverse[0].created).toEqual('2021-03-13');
    expect(sortedByCreateDateReverse[1].created).toEqual('2021-03-01');

    const sortedByUpdateDate:dataType[] = sortData(data, 'update-date-oldest');
    expect(sortedByUpdateDate[0].lastUpdated).toEqual('2020-03-25');
    expect(sortedByUpdateDate[1].lastUpdated).toEqual('2021-03-14');

    const sortedByUpdateDateReverse:dataType[] = sortData(data, 'update-date-newest');
    expect(sortedByUpdateDateReverse[0].lastUpdated).toEqual('2021-03-14');
    expect(sortedByUpdateDateReverse[1].lastUpdated).toEqual('2020-03-25');
  })
})