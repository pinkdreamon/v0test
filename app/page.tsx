import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Brain, Code, Database, Zap } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-slate-800">김민준</div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-slate-600 hover:text-slate-900 transition-colors">
                홈
              </a>
              <a href="#ai-projects" className="text-slate-600 hover:text-slate-900 transition-colors">
                AI 프로젝트
              </a>
              <a href="#fullstack-projects" className="text-slate-600 hover:text-slate-900 transition-colors">
                풀스택 프로젝트
              </a>
              <a href="#experience" className="text-slate-600 hover:text-slate-900 transition-colors">
                프로젝트 경험
              </a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                연락처
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center">
              <Brain className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-4">
              AI 엔지니어{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">김민준</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              5년간의 AI/ML 개발 경험과 풀스택 개발 역량을 바탕으로 혁신적인 AI 솔루션을 구축합니다. 딥러닝, 자연어처리,
              컴퓨터 비전 분야의 전문성을 통해 비즈니스 가치를 창출하는 AI 제품을 개발합니다.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Python
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                TensorFlow
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                PyTorch
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                React
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Node.js
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                AWS
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Docker
              </Badge>
            </div>
            <div className="flex justify-center space-x-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Mail className="w-4 h-4 mr-2" />
                연락하기
              </Button>
              <Button variant="outline" size="lg">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="lg">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Projects Section */}
      <section id="ai-projects" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">AI 엔지니어링 프로젝트</h2>
            <p className="text-lg text-slate-600">최첨단 AI 기술을 활용한 혁신적인 솔루션들</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle>지능형 문서 분석 시스템</CardTitle>
                <CardDescription>OCR과 NLP를 결합한 자동 문서 처리 및 분류 시스템</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-slate-700 mb-2">핵심 기술</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">TensorFlow</Badge>
                      <Badge variant="outline">OpenCV</Badge>
                      <Badge variant="outline">BERT</Badge>
                      <Badge variant="outline">FastAPI</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-700 mb-2">주요 성과</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• 문서 처리 정확도 95% 달성</li>
                      <li>• 처리 시간 80% 단축</li>
                      <li>• 월 100만 건 문서 자동 분류</li>
                    </ul>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    프로젝트 상세보기
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle>실시간 이상 탐지 AI</CardTitle>
                <CardDescription>IoT 센서 데이터 기반 실시간 이상 상황 탐지 및 예측 시스템</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-slate-700 mb-2">핵심 기술</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">PyTorch</Badge>
                      <Badge variant="outline">LSTM</Badge>
                      <Badge variant="outline">Kafka</Badge>
                      <Badge variant="outline">Redis</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-700 mb-2">주요 성과</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• 이상 탐지 정확도 98.5%</li>
                      <li>• 평균 응답 시간 50ms</li>
                      <li>• 시스템 다운타임 90% 감소</li>
                    </ul>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    프로젝트 상세보기
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <CardTitle>대화형 AI 챗봇</CardTitle>
                <CardDescription>Transformer 기반 다국어 지원 고도화된 대화형 AI 어시스턴트</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-slate-700 mb-2">핵심 기술</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">GPT-4</Badge>
                      <Badge variant="outline">LangChain</Badge>
                      <Badge variant="outline">Vector DB</Badge>
                      <Badge variant="outline">WebSocket</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-700 mb-2">주요 성과</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• 사용자 만족도 4.8/5.0</li>
                      <li>• 일 평균 10만 대화 처리</li>
                      <li>• 고객 문의 해결률 85%</li>
                    </ul>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    프로젝트 상세보기
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Full-Stack Projects Section */}
      <section id="fullstack-projects" className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">풀스택 개발 프로젝트</h2>
            <p className="text-lg text-slate-600">프론트엔드부터 백엔드까지 완전한 웹 애플리케이션 구축</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <CardTitle>AI 기반 추천 플랫폼</CardTitle>
                <CardDescription>머신러닝 추천 알고리즘을 적용한 개인화 콘텐츠 플랫폼</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-slate-700 mb-2">기술 스택</h4>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-slate-600">Frontend</p>
                        <p className="text-slate-500">React, TypeScript, Tailwind CSS</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-600">Backend</p>
                        <p className="text-slate-500">Node.js, Express, Python</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-600">Database</p>
                        <p className="text-slate-500">PostgreSQL, Redis</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-700 mb-2">주요 기능</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• 실시간 개인화 추천 시스템</li>
                      <li>• 사용자 행동 분석 대시보드</li>
                      <li>• A/B 테스트 프레임워크</li>
                      <li>• 마이크로서비스 아키텍처</li>
                    </ul>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub 저장소
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle>실시간 데이터 분석 대시보드</CardTitle>
                <CardDescription>대용량 데이터 실시간 처리 및 시각화 웹 애플리케이션</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-slate-700 mb-2">기술 스택</h4>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-slate-600">Frontend</p>
                        <p className="text-slate-500">Next.js, D3.js, Chart.js</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-600">Backend</p>
                        <p className="text-slate-500">FastAPI, WebSocket</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-600">Infrastructure</p>
                        <p className="text-slate-500">AWS, Docker, Kubernetes</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-700 mb-2">주요 기능</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• 실시간 데이터 스트리밍</li>
                      <li>• 인터랙티브 차트 및 그래프</li>
                      <li>• 알림 및 임계값 모니터링</li>
                      <li>• 다중 사용자 권한 관리</li>
                    </ul>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    라이브 데모
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Multi-Category Experience Section */}
      <section id="experience" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">다양한 분야 프로젝트 경험</h2>
            <p className="text-lg text-slate-600">다양한 도메인에서의 기술적 도전과 성과</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">헬스케어 AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">의료 영상 분석 및 진단 보조 AI 시스템 개발</p>
                <div className="space-y-2">
                  <Badge variant="secondary" className="text-xs">
                    Computer Vision
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Medical Imaging
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    CNN
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">핀테크</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">금융 데이터 분석 및 리스크 관리 시스템 구축</p>
                <div className="space-y-2">
                  <Badge variant="secondary" className="text-xs">
                    Time Series
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Risk Analysis
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Blockchain
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">이커머스</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">개인화 추천 시스템 및 고객 행동 분석 플랫폼</p>
                <div className="space-y-2">
                  <Badge variant="secondary" className="text-xs">
                    Recommendation
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    User Analytics
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    A/B Testing
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">스마트 시티</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">IoT 기반 도시 인프라 모니터링 및 최적화 시스템</p>
                <div className="space-y-2">
                  <Badge variant="secondary" className="text-xs">
                    IoT
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Edge Computing
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Optimization
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">기술적 전문성</h3>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">AI/ML 기술</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Deep Learning</Badge>
                    <Badge>NLP</Badge>
                    <Badge>Computer Vision</Badge>
                    <Badge>Reinforcement Learning</Badge>
                    <Badge>MLOps</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">개발 기술</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Python</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>React</Badge>
                    <Badge>Node.js</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">인프라 & 도구</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>AWS</Badge>
                    <Badge>Docker</Badge>
                    <Badge>Kubernetes</Badge>
                    <Badge>CI/CD</Badge>
                    <Badge>Monitoring</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">함께 혁신을 만들어가요</h2>
          <p className="text-xl text-slate-300 mb-8">
            AI 기술로 비즈니스 가치를 창출하는 프로젝트에 참여하고 싶습니다.
          </p>
          <div className="flex justify-center space-x-6">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              <Mail className="w-5 h-5 mr-2" />
              minjun.kim@email.com
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
