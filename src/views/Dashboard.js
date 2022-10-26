import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-futbol"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">운동부족!!</p>
                      <Card.Title as="h6">여가시간을 가지는 아이가 학업성적이 더 우수하다.</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-play"></i>
                  <button onClick={()=>window.open("https://www.youtube.com/results?search_query=%EA%B3%A0%EB%93%B1%ED%95%99%EC%83%9D+%EC%B6%94%EC%B2%9C+%EC%9A%B4%EB%8F%99")}>솔루션보기</button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-head-side-virus"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">심박변이</p>
                      <Card.Title as="h6">스트레스 수치가 높아요!</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-brain"></i>
                  <button onClick={()=>window.open("https://www.youtube.com/results?search_query=%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%8A%A4+%ED%95%B4%EC%86%8C")}>솔루션보기</button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="12">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fa fa-heartbeat text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">심박수</p>
                      <Card.Title as="h6">심박수가 증가했어요</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-grimace"></i>
                  <button onClick={()=>window.open("https://www.youtube.com/results?search_query=%EC%8B%AC%EB%B0%95%EC%88%98+%EB%82%AE%EC%B6%94%EB%8A%94+%EC%9A%B4%EB%8F%99")}>솔루션보기</button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">심박수, 심박변위, 운동량의 꺾은선그래프</Card.Title>
                <p className="card-category">스마트워치에서 뽑아낸 심박수, 심박변위, 운동량을 3시간마다 추출해낸 데이터를 나타낸 꺾은선그래프</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "00시",
                        "03시",
                        "09시",
                        "06시",
                        "12시",
                        "15시",
                        "18시",
                        "21시",
                      ],
                      series: [
                        [75,72,82,88,80,108,82,81],
                        [43,32,23,41,11,26,32,22],
                        [27,86,72,32,35,15,102,123],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 150,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  심박수 <i className="fas fa-circle text-danger"></i>
                  심박변위 <i className="fas fa-circle text-warning"></i>
                  운동량
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  3시간마다 비교
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
        <Col md="5">
            <Card>
              <Card.Header>
                <Card.Title as="h4">주간 행복도 비율</Card.Title>
                <p className="card-category">주간단위로 행복도의 평균을 백분율로 나타낸 파이그래프</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels:["40%","2%","33%","5%","10%","10%"],
                      series: [40,2,33,5,10,10],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="legend">
                  <div class="fas fa-circle text-info"></div>수면 
                  <i className="fas fa-circle text-danger"></i>등하교 
                  <i className="fas fa-circle text-warning"></i>학업
                  <br></br>
                  <i id="circle">●</i>식사시간                   
                  <i className="fas fa-circle text-success"></i>운동시간 
                  <i className="fas fa-circle text-primary"></i>여가시간             
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock"></i>
                  일주일마다 비교
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="7">
            <Card>
              <Card.Header>
                <Card.Title as="h4">행복도 비교 막대그래프</Card.Title>
                <p className="card-category">어제와 오늘의 행복도를 비교하는 막대그래프</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart"  id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: ["수면","등하교","학업","식사\n시간","운동\n시간","여가\n시간"],
                      series: [
                        [5,1,3,4,2,5],[5,4,1,3,4,5],
                      ],
                    }}
                    type="Bar"
                    options={{
                      seriesBarDistance: 10,
                      axisX: {
                        showGrid: false,
                      },
                      height: "245px",
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          seriesBarDistance: 5,
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  어제 <i className="fas fa-circle text-danger"></i>
                  오늘
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-check"></i>
                  어제와 오늘의 비교
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="7">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4">자가체크리스트</Card.Title>
                <p className="card-category">이번주를 되돌아보는 시간을 가져봅시다.</p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table>
                    <tbody>
                      <tr>
                        <td colSpan={2}>
                          - 이번주 운동 및 스트레칭은 잘하고 있나요?
                        </td>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>            
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          - 이번주 학업시간은 적절한가요?
                        </td>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        
                        
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          - 이번주 수면시간은 적절한가요?
                        </td>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        
                        
                      </tr>
                      <tr>
                        <td colSpan={2}>
                        - 이번주 여가시간은 적절한가요?
                        </td>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        
                        
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          - 이번주 여가시간은 적절한가요?
                        </td>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>                                              
                      </tr>                      
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="now-ui-icons loader_refresh spin"></i>
                  일주일마다 초기화
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
