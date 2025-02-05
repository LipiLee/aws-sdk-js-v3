import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetStreamingDistributionConfigRequest, GetStreamingDistributionConfigResult } from "../models/models_1";
import {
  deserializeAws_restXmlGetStreamingDistributionConfigCommand,
  serializeAws_restXmlGetStreamingDistributionConfigCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface GetStreamingDistributionConfigCommandInput extends GetStreamingDistributionConfigRequest {}
export interface GetStreamingDistributionConfigCommandOutput
  extends GetStreamingDistributionConfigResult,
    __MetadataBearer {}

/**
 * <p>Get the configuration information about a streaming distribution. </p>
 */
export class GetStreamingDistributionConfigCommand extends $Command<
  GetStreamingDistributionConfigCommandInput,
  GetStreamingDistributionConfigCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetStreamingDistributionConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetStreamingDistributionConfigCommandInput, GetStreamingDistributionConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetStreamingDistributionConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetStreamingDistributionConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetStreamingDistributionConfigResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetStreamingDistributionConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlGetStreamingDistributionConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetStreamingDistributionConfigCommandOutput> {
    return deserializeAws_restXmlGetStreamingDistributionConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
