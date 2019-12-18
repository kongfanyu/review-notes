(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{252:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("blockquote",[s("p",[a._v("专栏原创出处："),s("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/framework/flink-basis",target:"_blank",rel:"noopener noreferrer"}},[a._v("github-源笔记文件 "),s("OutboundLink")],1),a._v(" ，"),s("a",{attrs:{href:"https://github.com/GourdErwa/flink-advanced",target:"_blank",rel:"noopener noreferrer"}},[a._v("github-源码 "),s("OutboundLink")],1),a._v("，欢迎 Star，转载请附上原文出处链接和本声明。"),s("br"),a._v("\n本节内容对应"),s("a",{attrs:{href:"https://ci.apache.org/projects/flink/flink-docs-release-1.9/dev/types_serialization.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档 "),s("OutboundLink")],1)])]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-数据类型以及序列化"}},[a._v("1 数据类型以及序列化")])]),s("li",[s("a",{attrs:{href:"#_2-类型处理"}},[a._v("2 类型处理")])]),s("li",[s("a",{attrs:{href:"#_3-最常见问题"}},[a._v("3 最常见问题")])]),s("li",[s("a",{attrs:{href:"#_4-typeinformation-类"}},[a._v("4 TypeInformation 类")])]),s("li",[s("a",{attrs:{href:"#_5-datatype-类"}},[a._v("5 DataType 类")]),s("ul",[s("li",[s("a",{attrs:{href:"#创建-typeinformation-或者-typeserializer"}},[a._v("创建 TypeInformation 或者 TypeSerializer")])])])]),s("li",[s("a",{attrs:{href:"#_6-scala-api-中的类型信息"}},[a._v("6 Scala API 中的类型信息")]),s("ul",[s("li",[s("a",{attrs:{href:"#泛型方法"}},[a._v("泛型方法")])])])]),s("li",[s("a",{attrs:{href:"#_7-java-api-中的类型信息"}},[a._v("7 Java API 中的类型信息")]),s("ul",[s("li",[s("a",{attrs:{href:"#java-api-中的类型提示"}},[a._v("Java API 中的类型提示")])]),s("li",[s("a",{attrs:{href:"#pojo-类型的序列化"}},[a._v("POJO 类型的序列化")])])])]),s("li",[s("a",{attrs:{href:"#_8-禁止回退到-kryo"}},[a._v("8 禁止回退到 Kryo")])]),s("li",[s("a",{attrs:{href:"#_9-使用工厂方法定义类型信息"}},[a._v("9 使用工厂方法定义类型信息")])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"_1-数据类型以及序列化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据类型以及序列化"}},[a._v("#")]),a._v(" 1 数据类型以及序列化")]),a._v(" "),s("p",[a._v("Apache Flink 以其独特的方式来处理数据类型以及序列化，这种方式包括它自身的类型描述符、泛型类型提取以及类型序列化框架。"),s("br"),a._v("\n本文档描述了它们背后的概念和基本原理。")]),a._v(" "),s("h2",{attrs:{id:"_2-类型处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-类型处理"}},[a._v("#")]),a._v(" 2 类型处理")]),a._v(" "),s("p",[a._v("Flink 会尽力推断有关数据类型的大量信息，这些数据会在分布式计算期间被网络交换或存储。"),s("br"),a._v("\n可以把它想象成一个推断表结构的数据库。"),s("br"),a._v("\n在大多数情况下，Flink 可以依赖自身透明的推断出所有需要的类型信息。"),s("br"),a._v("\n掌握这些类型信息可以帮助 Flink 实现很多意想不到的特性：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v('对于使用 POJOs 类型的数据，可以通过指定字段名（比如 dataSet.keyBy("username") ）进行 grouping 、joining、aggregating 操作。'),s("br"),a._v("\n类型信息可以帮助 Flink 在运行前做一些拼写错误以及类型兼容方面的检查，而不是等到运行时才暴露这些问题。")])]),a._v(" "),s("li",[s("p",[a._v("Flink 对数据类型了解的越多，序列化和数据布局方案就越好。"),s("br"),a._v("\n这对 Flink 中的内存使用范式尤为重要（可以尽可能处理堆上或者堆外的序列化数据并且使序列化操作很廉价）。")])]),a._v(" "),s("li",[s("p",[a._v("最后，它还使用户在大多数情况下免于担心序列化框架以及类型注册。")])])]),a._v(" "),s("p",[a._v("通常在应用运行之前的阶段 (pre-flight phase)，需要数据的类型信息 - 也就是在程序对 DataStream 或者 DataSet 的操作调用之后，在 execute()、print()、count()、collect() 调用之前。")]),a._v(" "),s("h2",{attrs:{id:"_3-最常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-最常见问题"}},[a._v("#")]),a._v(" 3 最常见问题")]),a._v(" "),s("p",[a._v("用户需要与 Flink 数据类型处理进行交互的最常见问题是：")]),a._v(" "),s("ul",[s("li",[s("p",[s("strong",[a._v("注册子类型")]),a._v(" 如果函数签名只包含超类型，但它们实际上在执行期间使用那些类型的子类型，则使 Flink 感知这些子类型可能会大大提高性能。"),s("br"),a._v("\n可以为每一个子类型调用 StreamExecutionEnvironment 或者 ExecutionEnvironment 的 .registerType(clazz) 方法。")])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("注册自定义序列化器")]),a._v("： 当 Flink 无法通过自身处理类型时会回退到 Kryo 进行处理。"),s("br"),a._v("\n并非所有的类型都可以被 Kryo (或者 Flink ) 处理。"),s("br"),a._v("\n例如谷歌的 Guava 集合类型默认情况下是没办法很好处理的。"),s("br"),a._v("\n解决方案是为这些引起问题的类型注册额外的序列化器。"),s("br"),a._v("\n调用 StreamExecutionEnvironment 或者 ExecutionEnvironment 的 .getConfig().addDefaultKryoSerializer(clazz, serializer) 方法注册 Kryo 序列化器。")])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("添加类型提示")]),a._v(" Flink 用尽一切手段也无法推断出泛型类型，用户需要提供类型提示。")])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("手动创建 TypeInformation")]),a._v("： 这可能是某些 API 调用所必需的，因为 Java 的泛型类型擦除会导致 Flink 无法推断出数据类型。")])])]),a._v(" "),s("h2",{attrs:{id:"_4-typeinformation-类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-typeinformation-类"}},[a._v("#")]),a._v(" 4 TypeInformation 类")]),a._v(" "),s("p",[a._v("类 TypeInformation 是所有类型描述符的基类。"),s("br"),a._v("\n该类表示类型的基本属性，并且可以生成序列化器，在一些特殊情况下可以生成类型的比较器。"),s("br"),a._v("\n(请注意，Flink 中的比较器不仅仅是定义顺序 - 它们是处理键的基础工具)")]),a._v(" "),s("p",[a._v("Flink 内部对类型做了如下区分：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("基础类型：所有的 Java 主类型（primitive）以及他们的包装类，再加上 void、String、Date、BigDecimal 以及 BigInteger。")])]),a._v(" "),s("li",[s("p",[a._v("主类型数组（primitive array）以及对象数组")])]),a._v(" "),s("li",[s("p",[a._v("复合类型")]),a._v(" "),s("ul",[s("li",[a._v("Flink 中的 Java 元组 (Tuples) (元组是 Flink Java API 的一部分)：最多支持 25 个字段，null 是不支持的。")]),a._v(" "),s("li",[a._v("Scala 中的 case classes (包括 Scala 元组)：null 是不支持的。")]),a._v(" "),s("li",[a._v("Row：具有任意数量字段的元组并且支持 null 字段。。")]),a._v(" "),s("li",[a._v("POJOs: 遵循某种类似 bean 模式的类。")])])]),a._v(" "),s("li",[s("p",[a._v("辅助类型 (Option、Either、Lists、Maps 等)")])]),a._v(" "),s("li",[s("p",[a._v("泛型类型：这些不是由 Flink 本身序列化的，而是由 Kryo 序列化的。")])])]),a._v(" "),s("p",[a._v("介于 "),s("code",[a._v("TypeInformation")]),a._v("子类较多，仅展示基础类型、组合类型、对象数组 与 "),s("code",[a._v("TypeInformation")]),a._v(" 继承关系，实际情况参考源码分析")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/framework/flink-basis/_images/typeInformation_uml.png",alt:"typeInformation_uml"}})]),a._v(" "),s("p",[a._v("POJOs 是特别有趣的，因为他们支持复杂类型的创建以及在键的定义中直接使用字段名： "),s("code",[a._v('dataSet.join(another).where("name").equalTo("personName")')]),a._v(" 它们对运行时也是透明的，并且可以由 Flink 非常高效地处理。")]),a._v(" "),s("h2",{attrs:{id:"_5-datatype-类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-datatype-类"}},[a._v("#")]),a._v(" 5 DataType 类")]),a._v(" "),s("p",[a._v("描述 Table SQL API 中数据类型。此类的实例可用于声明操作的输入和/或输出类型。")]),a._v(" "),s("p",[a._v("DataType 类有两个职责：")]),a._v(" "),s("ul",[s("li",[a._v("声明逻辑类型 "),s("code",[a._v("LogicalType logicalType")])]),a._v(" "),s("li",[a._v("运行时逻辑转换类 "),s("code",[a._v("Class<?> conversionClass")]),a._v("，可以为空。"),s("br"),a._v("\n为空时，使用每个逻辑类型实际支持输入输出支持类型 e.g. "),s("code",[a._v("LogicalType#supportsInputConversion")])])]),a._v(" "),s("p",[s("code",[a._v("logicalType")]),a._v("独立于任何运行时逻辑转换类形式，并且描述接近 SQL 标准的术语"),s("br"),a._v("\n例如 "),s("code",[a._v("TimestampType extends LogicalType")]),a._v(" ，"),s("code",[a._v("TimestampType")]),a._v(" 支持 "),s("code",[a._v("java.sql.Timestamp、java.time.LocalDateTime")]),a._v(" 两种类型，"),s("br"),a._v("\n如果不指定具体运行时处理类，默认按 java.time.LocalDateTime 进行数据转换操作。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('val time = DataTypes.TIME()\n\ninfo(s"${time.getLogicalType}") // TIME(0)\ninfo(s"${time.getConversionClass}") // class java.time.LocalTime\n')])])]),s("p",[a._v("请参阅"),s("code",[a._v("link org.apache.flink.table.types.logical.LogicalType")]),a._v("和其子类，以获取有关可用逻辑类型及其属性的更多信息。")]),a._v(" "),s("p",[a._v("参见 DataTypes 以获取支持的数据类型和此类实例的列表\n"),s("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/framework/flink-basis/_images/dataType_uml.png",alt:"dataType_uml.png"}})]),a._v(" "),s("h3",{attrs:{id:"创建-typeinformation-或者-typeserializer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-typeinformation-或者-typeserializer"}},[a._v("#")]),a._v(" 创建 TypeInformation 或者 TypeSerializer")]),a._v(" "),s("p",[a._v("要为类型创建 "),s("code",[a._v("TypeInformation")]),a._v(" 对象，需要使用特定于语言的方法：")]),a._v(" "),s("h4",{attrs:{id:"在-scala-中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-scala-中"}},[a._v("#")]),a._v(" 在 Scala 中")]),a._v(" "),s("p",[s("code",[a._v("org.apache.flink.api.scala.typeutils.Types")]),a._v(" 提供 scala 相关类型的方法")]),a._v(" "),s("p",[a._v("Flink 使用在编译时运行的宏捕获所有泛型类型信息。")]),a._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 注意：这个导入是为了访问 'createTypeInformation' 的宏函数")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// implicit def createTypeInformation[T]: TypeInformation[T] = macro TypeUtils.createTypeInfo[T]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("apache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("flink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("streaming"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("scala")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("_\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("object")]),a._v(" TypeInformationApp "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" MainApp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 获取 TypeInformation")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" appleType1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" TypeInformation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("of"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("classOf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Apple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" appleType2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" createTypeInformation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Apple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// case class 获取 TypeInformation")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" appleType "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("CASE_CLASS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Apple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("asInstanceOf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("CaseClassTypeInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Apple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"${appleType.isCaseClass()}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// true")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 泛型推导")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" tuple2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("TUPLE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"${tuple2.getGenericParameters}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// {T1=String, T2=Integer}")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 泛型推导")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" boxType "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("CASE_CLASS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Apple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("asInstanceOf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("CaseClassTypeInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Apple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"${boxType.getGenericParameters()}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// {T1=Apple(color: String, size: Integer)}")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 字段类型获取")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" fieldTypes "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("boxType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fieldNames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" boxType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fieldNames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("boxType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("getTypeAt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"$fieldTypes"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// (")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// List(content, maxWeight),")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// List(ObjectArrayTypeInfo<Apple(color: String, weight: Integer)>, Integer)")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// )")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n  * 苹果\n  *\n  * @param color  颜色\n  * @param weight 重量\n  */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("case")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" Apple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("color"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" weight"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/** 箱子\n  *\n  * @param content   内容，e.g. 内容是一箱子苹果\n  * @param maxWeight 最大重量\n  * @tparam T 箱子内内容描述\n  */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("case")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" Box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("T"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("content"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("T"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" maxWeight"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h2",{attrs:{id:"_6-scala-api-中的类型信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-scala-api-中的类型信息"}},[a._v("#")]),a._v(" 6 Scala API 中的类型信息")]),a._v(" "),s("p",[s("code",[a._v("implicit def createTypeInformation[T]: TypeInformation[T] = macro TypeUtils.createTypeInfo[T]")])]),a._v(" "),s("p",[a._v("Scala 拥有精细的运行时类型信息概念 type manifests 以及 class tags。类型和方法通常可以访问他们泛型参数的类型 - 因此，Scala 程序不像 Java 程序那样需要面对类型擦除的问题。")]),a._v(" "),s("p",[a._v("此外，Scala 允许通过 Scala 宏在 Scala 编译器中运行自定义代码 - 这意味着无论何时编译使用 Flink Scala API 编写的 Scala 程序，都会执行一些 Flink 代码。")]),a._v(" "),s("p",[a._v("我们在编译期间使用宏来查看所有用户自定义函数的参数类型和返回类型 - 这是所有类型信息都完全可用的时间点。 在宏中，我们为函数的返回类型（或参数类型）创建了 TypeInformation，并使其成为操作的一部分。")]),a._v(" "),s("h3",{attrs:{id:"泛型方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#泛型方法"}},[a._v("#")]),a._v(" 泛型方法")]),a._v(" "),s("p",[a._v("考虑下面的代码：")]),a._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("def")]),a._v(" selectFirst"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("T"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("input"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" DataSet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("T"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" DataSet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("T"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("map "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" v "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("=>")]),a._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("_1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" DataSet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("Long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" selectFirst"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("对于上面这样的泛型方法，函数的参数类型以及返回类型可能每一次调用都是不同的并且没有办法在方法定义的时候被感知到。 上面的代码将导致没有足够的隐式转换可用错误。")]),a._v(" "),s("p",[a._v("在这种情况下，类型信息必须在调用时间点生成并将其传递给方法。Scala 为此提供了隐式转换。")]),a._v(" "),s("p",[a._v("下面的代码告诉 Scala 将 T 的类型信息带入函数中。类型信息会在方法被调用的时间生成，而不是 方法定义的时候。")]),a._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("def")]),a._v(" selectFirst"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("T "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" TypeInformation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("input"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" DataSet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("T"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" DataSet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("T"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("map "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" v "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("=>")]),a._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("_1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"_7-java-api-中的类型信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-java-api-中的类型信息"}},[a._v("#")]),a._v(" 7 Java API 中的类型信息")]),a._v(" "),s("p",[a._v("Java 会擦除泛型类型信息。Flink 使用 Java 预留的少量位（主要是函数签名以及子类信息）通过反射尽可能多的重新构造类型信息。 对于依赖输入类型来确定函数返回类型的情况，此逻辑还包含一些简单类型推断：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AppendOne")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MapFunction")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Tuple2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Tuple2")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Tuple2")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("在某些情况下，Flink 无法重建所有泛型类型信息。 在这种情况下，用户必须通过类型提示来解决问题。")]),a._v(" "),s("h3",{attrs:{id:"java-api-中的类型提示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-api-中的类型提示"}},[a._v("#")]),a._v(" Java API 中的类型提示")]),a._v(" "),s("p",[a._v("在 Flink 无法重建被擦除的泛型类型信息的情况下，Java API 需要提供所谓的类型提示。 类型提示告诉系统 DateStream 或者 DateSet 产生的类型：")]),a._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[a._v("DataSet"),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SomeType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" dataSet\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" MyGenericNonInferrableFunction"),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SomeType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("returns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("SomeType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("在上面情况下 returns 表达通过 Class 类型指出产生的类型。通过下面方式支持类型提示：")]),a._v(" "),s("p",[a._v("对于非参数化的类型（没有泛型）的 Class 类型\n以 returns(new TypeHint<Tuple2<Integer, SomeType>>(){}) 方式进行类型提示。 TypeHint 类可以捕获泛型的类型信息并且保存到执行期间（通过匿名子类）。")]),a._v(" "),s("h3",{attrs:{id:"pojo-类型的序列化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pojo-类型的序列化"}},[a._v("#")]),a._v(" POJO 类型的序列化")]),a._v(" "),s("p",[s("code",[a._v("PojoTypeInfo")]),a._v(" 为 POJO 中的所有字段创建序列化器。Flink 标准类型如 int、long、String 等由 Flink 序列化器处理。 对于所有其他类型，我们回退到 Kryo。")]),a._v(" "),s("p",[a._v("对于 Kryo 不能处理的类型，你可以要求 PojoTypeInfo 使用 Avro 对 POJO 进行序列化。 需要通过下面的代码开启。")]),a._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" ExecutionEnvironment env "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" ExecutionEnvironment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("getExecutionEnvironment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nenv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("getConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("enableForceAvro"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("请注意，Flink 会使用 Avro 序列化器自动序列化 Avro 生成的 POJO。")]),a._v(" "),s("p",[a._v("通过下面设置可以让你的整个 POJO 类型被 Kryo 序列化器处理。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("final ExecutionEnvironment env = ExecutionEnvironment.getExecutionEnvironment();\nenv.getConfig().enableForceKryo();\n")])])]),s("p",[a._v("如果 Kryo 不能序列化你的 POJO，可以通过下面的代码添加自定义的序列化器")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("env.getConfig().addDefaultKryoSerializer(Class<?> type, Class<? extends Serializer<?>> serializerClass)\n")])])]),s("h2",{attrs:{id:"_8-禁止回退到-kryo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-禁止回退到-kryo"}},[a._v("#")]),a._v(" 8 禁止回退到 Kryo")]),a._v(" "),s("p",[a._v("对于泛型信息，程序可能希望在一些情况下显示的避免使用 Kryo。最常见的场景是，用户想要确保所有的类型都可以通过 Flink 自身 或者用户自定义的序列化器高效的进行序列化操作。")]),a._v(" "),s("p",[a._v("下面的设置将引起通过 Kryo 的数据类型抛出异常：\n"),s("code",[a._v("env.getConfig().disableGenericTypes();")])]),a._v(" "),s("h2",{attrs:{id:"_9-使用工厂方法定义类型信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-使用工厂方法定义类型信息"}},[a._v("#")]),a._v(" 9 使用工厂方法定义类型信息")]),a._v(" "),s("p",[a._v("类型信息工厂允许将用户定义的类型信息插入 Flink 类型系统。 你可以通过实现 org.apache.flink.api.common.typeinfo.TypeInfoFactory 来返回自定义的类型信息工厂。 如果相应的类型已指定了 @org.apache.flink.api.common.typeinfo.TypeInfo 注解，则在类型提取阶段会调用 TypeInfo 注解指定的 类型信息工厂。")]),a._v(" "),s("p",[a._v("类型信息工厂可以在 Java 和 Scala API 中使用。")]),a._v(" "),s("p",[a._v("在类型的层次结构中，在向上遍历时将选择最近的工厂，但是内置工厂具有最高优先级。 工厂的优先级也高于 Flink 的内置类型，因此你应该知道自己在做什么。")]),a._v(" "),s("p",[a._v("以下示例说明如何使用 Java 中的工厂注释为自定义类型 MyTuple 提供自定义类型信息。")]),a._v(" "),s("p",[a._v("带注解的自定义类型：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@TypeInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyTupleTypeInfoFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyTuple")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("T0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" T1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T0")]),a._v(" myfield0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T1")]),a._v(" myfield1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("支持自定义类型信息的工厂：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyTupleTypeInfoFactory")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TypeInfoFactory")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyTuple")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TypeInformation")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyTuple")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("createTypeInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Type")]),a._v(" t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Map")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TypeInformation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" genericParameters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyTupleTypeInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("genericParameters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"T0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" genericParameters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"T1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("方法 "),s("code",[a._v("createTypeInfo(Type, Map<String, TypeInformation<?>>)")]),a._v(" 为工厂所对应的类型创建类型信息。 参数提供有关类型本身的额外信息以及类型的泛型类型参数。")]),a._v(" "),s("p",[a._v("如果你的类型包含可能需要从 Flink 函数的输入类型派生的泛型参数， 请确保还实现了 "),s("code",[a._v("org.apache.flink.api.common.typeinfo.TypeInformation#getGenericParameters")]),a._v("， 以便将泛型参数与类型信息进行双向映射。")])])}),[],!1,null,null,null);t.default=e.exports}}]);