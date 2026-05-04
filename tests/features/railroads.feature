Feature: Daily search for railroads
Scenario: Slowly search railroads
    Given That I am on the homepage
    When I search for these railroads:
        | id | name                                | class | active   | description                      |
        |  0 | Missouri Pacific rr                 | 1     | false    |                                  |
        |  1 | Kansas City Southern rr             | 1     | false    |                                  |
        |  2 | Denver & Rio Grande RR              | 1     | false    |                                  |
        |  3 | Southern Pacific RR                 | 1     | false    |                                  |
        |  4 | Union Pacific Railroad              | 1     | false    |                                  |
        |  5 | Atchinson Topeka & Santa Fe Railway | 1     | false    |                                  |
        |  6 | Western Pacific Railroad            | 1     | false    |                                  |
        |  7 | Spokane, Portland & Seattle Railway | 1     | false    |                                  |
        |  8 | Great Western Railroad              | 1     | false    |                                  |
        |  9 | Chicago, Burlington, & Quincy RR    | 1     | false    |                                  |
        | 10 | Great Northern Railway              | 1     | false    |                                  |
        | 11 | Burlington Northern Railroad        | 1     | false    |                                  |
        | 12 | Milwaukee Road                      | 1     | false    |                                  |
        | 13 | Canadian National Railway           | 1     | false    |                                  |
        | 14 | Canadian Pacific Railway            | 1     | false    |                                  |
        | 15 | Grand Trunk Railway                 | 1     | false    |                                  |
        | 16 | Erie & Lackawana Railway            | 1     | false    |                                  |
        | 17 | Boston & Maine Railroad             | 1     | false    |                                  |
        | 18 | Pan-Am Railways                     | 1     | false    |                                  |
        | 19 | New Haven Railroad                  | 1     | false    | New York, New Haven and Hartford Railroad |
        | 20 | Delaware & Hudson Railway           | 1     | false    |                                  |
        | 21 | Chesapeake & Ohio Railway           | 1     | false    |                                  |
        | 22 | Baltimore & Ohio Railroad           | 1     | false    |                                  |
        | 23 | Pennsylvania Railroad               | 1     | false    |                                  |
        | 24 | Penn Central Railroad               | 1     | false    |                                  |
        | 25 | New York Central Railroad           | 1     | false    |                                  |
        | 26 | Conrail Railroad                    | 1     | false    |                                  |
        | 27 | CSX Railroad                        | 1     | false    |                                  |
        | 28 | Norfolk Southern Railway            | 1     | false    |                                  |
        | 29 | Florida East Coast Railway          | 1     | false    |                                  |
        | 30 | Florida Gulf & Atlantic Railroad    | 1     | false    |                                  |
        | 31 | Atlantic Coast Line Railroad        | 1     | false    |                                  |
        | 32 | Seaboard Coast Line Railroad        | 1     | false    |                                  |
        | 33 | Louisville & Nashville Railroad     | 1     | false    |                                  |
        | 34 | Seaboard System Railroad            | 1     | false    |                                  |
        | 35 | Amtrak                              | 1     | false    |                                  |
        | 36 | Metra                               | 4     | false    |                                  |
        | 37 | MBTA Railway                        | 4     | false    |                                  |
        | 38 | Metrolink                           | 4     | false    |                                  |
        | 39 | Brightline Trains                   | 2     | false    |                                  |
        | 40 | Tri-Rail Commuter Line              | 1     | false    |                                  |
    And I enter the railroad into the search field
    Then I should see results

Scenario: Slowly search locomotives
    Given That I am on the homepage
    When I search for these locomotives:
        | id | designation | type          | description  | builder         |
        |  0 | VO-1000     | switcher      |              | Alco            |
        |  1 | SW-1200     | switcher      |              | EMD             |
        |  2 | SW-1500     | switcher      |              | EMD             |
        |  3 | RS-3        | road/switcher |              | Alco            |
        |  4 | PA-1        | passenger     |              | Baldwin         |
        |  5 | RF-16       | passenger     |              | Alco            |
        |  6 | GP35        | road/switcher |              |                 |
        |  7 | GP38        | road/switcher |              |                 |
        |  8 | GP38-2      | road/switcher |              |                 |
        |  9 | GP39-2      | road/switcher |              |                 |
        | 10 | GP40-2      | road/switcher |              |                 |
        | 11 | SD40-2      | road/switcher |              |                 |
        | 12 | U25B        | road          |              | GE              |
        | 13 | U26C        | road          |              | GE              |
        | 14 | GE Dash-7   | road          |              | GE              |
        | 15 | GE Dash-8   | road          |              | GE              |
        | 16 | GE Dash-9   | road          |              | GE              |
        | 17 | SD70ACE     | road          |              | EMD             |
        | 18 | SD70MAC     | road          |              | EMD             |
        | 19 | SD80MAC     | road          |              | EMD             |
        | 20 | SD90MAC     | road          |              | EMD             |
        | 21 | AC6000      | road          |              |                 |
        | 22 | AC4400CW    | road          |              |                 |
        | 23 | ES44AC      | road          |              |                 |
        | 23 | BL36PH4     | passenger     |              | Brookville      | 
    And I enter the locomotive into the search field
    Then I should see results 
