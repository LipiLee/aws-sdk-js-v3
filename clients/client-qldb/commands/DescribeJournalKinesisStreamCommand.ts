import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import { DescribeJournalKinesisStreamRequest, DescribeJournalKinesisStreamResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeJournalKinesisStreamCommand,
  serializeAws_restJson1DescribeJournalKinesisStreamCommand,
} from "../protocols/Aws_restJson1";
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

export interface DescribeJournalKinesisStreamCommandInput extends DescribeJournalKinesisStreamRequest {}
export interface DescribeJournalKinesisStreamCommandOutput
  extends DescribeJournalKinesisStreamResponse,
    __MetadataBearer {}

/**
 * <p>Returns detailed information about a given Amazon QLDB journal stream. The output
 *          includes the Amazon Resource Name (ARN), stream name, current status, creation time, and
 *          the parameters of your original stream creation request.</p>
 */
export class DescribeJournalKinesisStreamCommand extends $Command<
  DescribeJournalKinesisStreamCommandInput,
  DescribeJournalKinesisStreamCommandOutput,
  QLDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeJournalKinesisStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QLDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeJournalKinesisStreamCommandInput, DescribeJournalKinesisStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "DescribeJournalKinesisStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeJournalKinesisStreamRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeJournalKinesisStreamResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeJournalKinesisStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeJournalKinesisStreamCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeJournalKinesisStreamCommandOutput> {
    return deserializeAws_restJson1DescribeJournalKinesisStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
